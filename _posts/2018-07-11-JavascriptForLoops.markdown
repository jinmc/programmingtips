---
layout: post
comments: true
title:  "Javascript for loops"
date:   2018-07-11
categories: jekyll update
---
In JavaScript, I am looking into looping, and there are certain ways to loop.
Of course there are basic things as for loop, while loop, do while loop, .. 
but there are two new (to me..) loops, which are for in loop, and for out loop.

The description of for-in loop :
"This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, 
allowing statements to be executed for each distinct property."

and description of for-of loop :
"This loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc.
It essentially iterates over the value of each distinct property in the structure, 
such as each letter in a word or each element in an array."

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