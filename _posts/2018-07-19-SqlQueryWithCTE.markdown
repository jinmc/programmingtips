---
layout: post
comments: true
title:  "sql query with cte"
date:   2018-07-19
categories: sqlquery
---

Webforms and MVC are very much different, even in simple things as creating a form and retrieving information from them.
In Webforms, creating dropdownlists was so easy...

{% highlight csharp %}
	<asp:DropDownList id = "itemDdl" runat="server">
		<asp:ListItem Text ="Item1" Value ="1"></asp:ListItem>
     		<asp:ListItem Text ="Item2" Value ="2"></asp:ListItem>
		<asp:ListItem Text ="Item3" Value ="3"></asp:ListItem>
	</asp:DropDownList>

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