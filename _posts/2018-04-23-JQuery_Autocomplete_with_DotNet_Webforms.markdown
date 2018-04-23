---
layout: post
title:  "JQuery AutoComplete with ASP.NET Webforms 4.5 with SQLSERVER database"
date:   2018-04-23
categories: jekyll update
---

Environment : Visual Studio 2017 Enterprise Edition, SQL SERVER (don't know version) database, 
and used ASP.NET web forms(4.5)

Today I wanted to write how I implemented Jquery autocomplete feature with sql server backend database.

So to use Jquery, you should first call the jquery libraries in the html page, 
which I have done in the aspx page like this :

{% highlight csharp %}
    <script type="text/javascript" src="Scripts/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="Scripts/jquery-ui-1.12.1.js"></script>
    <link rel="stylesheet" type="text/css" href="Content/jquery-ui.css" />
{% endhighlight %}

I don't think the version matters much...

And then you have to call the list you are going to use for the autocomplete.
We are making a javascript list, 
which is in this format : list = ["one", "two", ... ];
but we have to make sure to make the string as a javascript list form. (I'll illustrate this below)

{% highlight csharp %}
    <script type="text/javascript">
        $(function() {
            var someTags = [<%= someList %>];
			
            $("#<%= someTextBox.ClientID %>").autocomplete({
                source: someTags
            });
        });
    </script>
{% endhighlight %}

So for some explanation here, we are using jquery with web froms syntax.
<% %> these are called inline expressions in .NET Frameworks and there are several kinds of them..
Reference : https://support.microsoft.com/en-us/help/976112/introduction-to-asp-net-inline-expressions-in-the-net-framework

So  [<%= someList %>] are displaying expression that contains Response.Write... which means,
it brings data from the backend. Also note that we cannot get someTextBox even though it's an ID 
directly on the aspx page, and we have to get the ClientID attribute which is the ID on the html page rendered after.

So as we are done for the frontEnd, let's get to the backend.. 
There would be multiple ways to implement this, but this is how I implemented it...

so in the backend, I just made a class object and instantiated it directly.. such as

{% highlight csharp %}
	public string someList = "";
{% endhighlight %}

And then finally, I make my someList in the pageLoad function.

I'm not gonna lie, I still don't get all the order of things happenning in the asp.net web forms 
lifecycle, but one thing is sure.. the jquery happens after the pageLoad function..
so that's how it's done. 

Actually $(function() {}) is a shorthand for $(document).ready() so.. anyway,

I won't write all the crazy things I wrote in my page_load function,
just the part we need for the autocomplete function which would be..

{% highlight csharp %}
        protected void Page_Load(object sender, EventArgs e)
        {
            string queryString = "select something from someWhere";

            string constr = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;

            using (SqlConnection connection = new SqlConnection(constr))
            {
                using (SqlCommand command = new SqlCommand(queryString, connection))
                {
                    connection.Open();

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            if (string.IsNullOrEmpty(someList))
                            {
                                vendorList += "\"" + reader["someThing"].ToString() + "\"";
                            }
                            else
                            {
                                vendorList += ", \"" + reader["someThing"].ToString() + "\"";
                            }
                        }
                    }
                }
			}
		}
{% endhighlight %}


So the if else loop is where we manipulate the string to be the javascript string list,
and rest is the database connection.

Happy Coding!
