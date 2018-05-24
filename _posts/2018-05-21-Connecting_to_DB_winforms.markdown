---
layout: post
comments: true
title:  "Connecting to the DB in Win forms"
date:   2018-05-21
categories: jekyll update
---

We cannot use SQL SERVER mangement studio when we are writing  a win forms application.
But, we can use sql. 
This is actually pretty straightforward, so I'll just write the codes.

{% highlight csharp %}
	public static readonly string SqlConn = "connection";
	
        public static string GetQueryRecordWithMono(string sql)
        {
            if (!string.IsNullOrEmpty(sql))
            {
                string result = "";
                SqlConnection conn = new SqlConnection(SqlConn);
                SqlCommand scmd = new SqlCommand(sql, conn);

                conn.Open();

                try
                {
                    SqlDataReader reader = scmd.ExecuteReader();
                    if (reader.Read())
                    {
                        result = reader[0].ToString();
                        if (!string.IsNullOrEmpty(result))
                        {
                            conn.Close();
                            return result;
                        }
                    }
                }
                catch (Exception e)
                {
                    MessageBox.Show(e.ToString());
                }
                conn.Close();
            }
            
            return null;
        }

{% endhighlight %}

The drawback of this is, you have to write many other functions for other actions
such as, updating a value, getting many results, (columns) inserting, etc.

example : 

{% highlight csharp %}
        public static List<string> getQueryRecordWithMonoArray(string sql)
        {
            if (!string.IsNullOrEmpty(sql))
            {
                string[] result;
                SqlConnection conn = new SqlConnection(SqlConn);
                conn.Open();
                SqlCommand SCMD = new SqlCommand(sql, conn);
                List<string> resultList = new List<string>();
                try
                {
                    SqlDataReader reader = SCMD.ExecuteReader();
                    while (reader.Read())
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            resultList.Add(reader[i].ToString());
                        }
                        
                    }
                    if (resultList.Count > 0)
                    {
                        conn.Close();
                        return resultList;
                    }
                }
                catch (SqlException e)
                {
                    // do nothing
                }
                conn.Close();
            }

            return null;
        }

        public static int executeDBquery(string sql)
        {
            int rowAffected = -1;
            if (!string.IsNullOrEmpty(sql))
            {
                SqlConnection conn = new SqlConnection(SqlConn);
                conn.Open();

                SqlCommand SCMD = new SqlCommand(sql, conn);
                rowAffected = SCMD.ExecuteNonQuery();
                conn.Close();

            }

            return rowAffected;

        }

        public static void insertDBQuery(string sql)
        {
            int idx = -1;
            if (!string.IsNullOrEmpty(sql))
            {
                SqlConnection conn = new SqlConnection(SqlConn);
                conn.Open();
                sql += "";


            }
            //throw new NotImplementedException();
        }
{% endhighlight %}

Another thing to keep in mind is that, 
when passing the string sql, the easy way to make sql strings is to 
use string interpolation, which starts with the dollar sign $ and put the variables inside curly braces {},
such as  

{% highlight csharp %}
 	string sql = $"select * from table where idx = {thisIdx}";
	ExecuteQuery(sql);
{% endhighlight %}

{% if page.comments %} 
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-jinmc-github-io-programmingtips.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            

 {% endif %}