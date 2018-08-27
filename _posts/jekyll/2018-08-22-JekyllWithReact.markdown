---
layout: post
comments: true
title:  "Using React with Jekyll using WebPack"
date:   2018-08-22
categories: jekyll react
---

I was never this excited about the post until now ...
As I become more and more familiar with Jekyll, 
I am actually enjoying it a lot that I can deploy with no cost 
and not have to handle the deploying details.. 

But I actually thought I was going to miss out a lot because 
it doesn't have a backend, but wait.. 
maybe not with javascript.. because you can do client side programming,
like React!?!?!?!?!??

so I started researching and found this article.

<i>https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc</i>

According to the article,
we can use webpack, which is a bundler for javascript and others
and also npm to set up react envirnoment, and we're ready to go.
I would be happy to do this, 
and will add a component in this or wherever post whenever I'm ready.

Edit : on 9/27 

I spent a whole day to implement this but failed,
and presume that it was because the config problem.

In the tutorial she bundled with webpack 2 but 
I was using webpack 4, and it was having problems with bable-loader.

So I think that I should learn more about this webpack and then try this again.
{% include react_component1.html %}

So I did it.. I finally made it!
The above comment is comming from Jekyll.. 

But I have to compile this.
In my case now, I have to type 
**webpack** in console and do a **jekyll build**
and then serve it.

{% include disqus2.html %}

{% include react_component1.html %}