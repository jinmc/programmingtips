---
layout: post
comments: true
title:  "Bind function in Javascript/React"
date:   2018-05-08
categories: jekyll update
---

As learning Javascript, I couldn't agree more why it's gaining such spotlights..
First of all, it's fancy! 

Honestly, I'm not a good enough developer to argue which language is better than which,
but I can tell pros and cons from my point of view, but I certainly have preferences, from past experiences.

I certainly like C#, not just because it is similar to Java, but also because of the existence of wonderfully comfortable and powerful
 Visual Studio. And on the other side, JavaScript... this is still my least favorite language. There are many things to it,
 but the biggest thing is that it is really hard to debug. Also, next thing is that I'm not used to it!
 
 When I  write React Codes, I see bind everywhere when I want to connect the logic with the action actually doing it.
This could be a good example : 

{% highlight javascript %}
	

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