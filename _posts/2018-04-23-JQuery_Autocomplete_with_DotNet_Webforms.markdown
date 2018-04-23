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

{% highlight ruby %}
    <script type="text/javascript" src="Scripts/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="Scripts/jquery-ui-1.12.1.js"></script>
    <link rel="stylesheet" type="text/css" href="Content/jquery-ui.css" />
{% endhighlight %}

I don't think the version matters much...