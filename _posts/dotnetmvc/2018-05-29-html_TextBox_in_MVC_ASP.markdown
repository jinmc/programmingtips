---
layout: post
comments: true
title:  "set value in html.textBox in MVC ASP.NET"
date:   2018-05-29
categories: dotnetmvc
---

Basic form setting.. 

which can be set in one line...

{% highlight csharp %}

        @Html.TextBox("fromDate", null, new { @class = "form-control", type = "date", id="fromDate", Value = String.Format("{0:yyyy-MM-dd}", DateTime.Today) })

{% endhighlight %}

the first is not important.. it's the name for htmlHelper.. not sure when it is used...
but @class is important because it's using the css from bootstrap.
id is also important, and type="date" automatically sets the datepicker.. 
which is amazing I don't have to set the jquery datepicker... 

but the emphasis I want to make is Value = String.Format thing...
because whatever I did, I couldn't set the value for the textbox, 
but always.. look at the console errors when having troubles in full stack!!

it was giving me this error saying...

The specified value does not conform to the required format yyyy-MM-dd!!

and also, the page source was saying that the value was inputted inside the source!!
So I set the string format as that and it worked... such amazing.. 


{% include disqus2.html %}