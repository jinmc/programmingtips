---
layout: post
comments: true
title:  "set value in html.textBox in MVC ASP.NET"
date:   2018-05-29
categories: jekyll update
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