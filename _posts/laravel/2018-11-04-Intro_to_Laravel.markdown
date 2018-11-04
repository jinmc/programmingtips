---
layout: post
comments: true
title:  "Intro to Laravel and setting up with it"
date:   2018-11-04
categories: laravel
---

Laravel is a PHP framework.

It is the most popular php framework existing.
The website is here laravel.com.

As php is usually set up with lamp stack, 
(linux, apache, mysql, php) knowledge of 
pretty much everything is needed.

You also need knowledge of hosting
even you'll be hosting localhost,
such as going into program files/system32/hosts
file to direct hosts, and set up virtualbox and vagrant in windows,
and also valet in mac os.

Also, it would be very much convenient to download and use 
composer, which is like npm for php libraries,
to download and use laravel.

After downloading and executing composer,
we can install laravel by this command

`$composer global require laravel/installer`

and we can just create a laravel repository by 
executing the command

`$laravel new blog` or something like that.

after this, we can do 

`$php artisan serve` to set laravel in localhost.


{% include disqus2.html %}
