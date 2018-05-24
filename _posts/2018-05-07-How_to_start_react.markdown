---
layout: post
comments: true
title:  "How to start React from Node"
date:   2018-05-07
categories: jekyll update
---

Nowadays I'm learning React from Edx.
The link is here : https://courses.edx.org/courses/course-v1:PennX+SD4x+2T2017/course/ 
It's a really nice course except that it gets so difficult to the end.
I've finished hw4 and now working on hw5 but it seems almost impossible to do it.

Anyways, before hw5, we implemented React by just writing Html and CSS, javascript in a monolithic 
kind of a way. But for hw5, we are actually implementing design patterns, and I think this is the right way 
to use React, and of course, Node.

I am stating that I take most of this from the instructions of PennX, and do not have copyright for this,
For starting node,

1. Install Node.js locally by downloading it from https://nodejs.org/en/download

2. From the Terminal, Command Prompt, etc. update Node Package Manager by typing the command :
   <strong>npm install npm -g</strong>
   
3. Install the create-react-app package by typing the command : 
	<strong>npm install -g create-react-app</strong>
	
4. Create a new folder or directory for your project, then navigate to it using Terminal, Command Prompt, etc.

5. Create the project by typing the command : <strong>create-react-app lists</strong>

6. This will create a "lists" directory and install the default React app there. You can start it by changing to the "lists"
directory and typing the command : <strong>npm start</strong>

You should then be able to access <strong>http://localhost:3000</strong> using your web browser and 
see the default React app. If so, you're ready to proceed.


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