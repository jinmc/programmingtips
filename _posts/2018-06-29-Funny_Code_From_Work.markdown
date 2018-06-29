---
layout: post
comments: true
title:  "Software Engineering Practices... Error"
date:   2018-06-29
categories: jekyll update
---

From work, there was this code that says..

{% highlight csharp %}
if (str != null || !str.isEmpty()) {
  doSomethingWith(str.charAt(0));
}
{% endhighlight %}

with full respect to the predecessor, this is funny if you know why.

For those who don't get this, the purpose of this code  is clearly to avoid the case of 
when string is null or the string is empty.. 

however, this will never go through, and if you don't know why.. 
try to think about it a for a bit.

The reason why is that even if the string is null, it will go for str.isEmpty()
function because the two functions are connected with || (or)  operator.

A quick and easy fix for this would be replacing the or operator 
with && (and) logical operator. 

Then, if the str!= null is false, which means string is null,
it won't go to str.IsEmpty() and just automatically get out of the loop.

The caveat of this is that,
and this is kind of funny, 
which is that this is written in C#,
and C# has a function on string datastructure

{% highlight csharp %}

s.isNullOrEmpty();

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