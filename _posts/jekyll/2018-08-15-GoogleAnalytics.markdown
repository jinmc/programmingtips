---
layout: post
comments: true
title:  "Google Analytics"
date:   2018-08-15
categories: jekyll
---

Honestly my first motivation for this was not to do google analytics
but to get a simple how many people came today and as a total.
But I got much more than that.
<br><br>
This is the post I have used for google analytics <br><br>
https://michaelsoolee.com/google-analytics-jekyll/
<br><br>
So basically you just have to go to the google analytics and get the 
key and include it in your every sites by including it in your default.html.
<br><br>
But the tricky part is, even if you serve your site from localhost, 
google analytics will count that as a count so you have to make sure 
to add this code

<% highlight ruby %>

	if JEKYLL_ENV='development':
		include google_analytics.html
	end;

<% endhighlight %>

something like this.. I can't write the exact syntax because the markdown file 
does not syntax highlight it and recognizes as the ruby code, something to work on...
<br><br>
Anyway, this will rebuild your site folder and the index.html in it would have the script code
that makes the google analytics possible. But the default value is development environment 
so we should build it with the production environment which will be
<br><br>
<b>JEKYLL_ENV=production jekyll build</b>
<br><br>
or
<br><br>
<b>JEKYLL_ENV=production bundle exec jekyll build</b>
<br><br>

I honestly think this is not a good way to implement things,
as you can easily forget to build this and just push on the server anytime,
but I don't know how to get away with it.

<br><br>
Also, I also haven't implemented the original motivation to display pageviews from the page,
and there are posts showing how to do it, using  https://github.com/developmentseed/jekyll-ga 
jekyll-ga gems or using apis.


{% include disqus2.html %}