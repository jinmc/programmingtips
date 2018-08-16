---

layout: post
comments: true
title:  "Ruby Version Controls"
date:   2018-08-04
tags: [Ruby] 
categories: ruby 

---

Ruby can be convenient when used when you know what you're doing,
with all the software practices with DRY(Don't repeat yourself) and bundlers.

But sometimes it can be cumbersome and also frustrating when you don't know
what to do when the versions mix up, and it happens quite frequently.

As a Mac user, ruby is already installed in my mac, 
but my Mac is already 3 years old, and the ruby installed in the laptop
as default is quite low version of it.

To use higher versions of ruby softwares, we have to use different versions of rubys
and to manage them, there is a package to do this, and it's called RVM.

There are a few commands to use RVM,

1. ruby -v
---> this will show you which ruby version you are using right now

2. which ruby
---> this will show you the ruby version you are using are located at

3. rvm list
---> this will show the ruby versions you currently have
for example, <br>
=* ruby-2.2.3 [ x86_64 ]<br>
   ruby-2.5.0 [ x86_64 ]<br>


4. rvm use *.*.*
---> this will make you use the versions you specify at rvm list.
<br>For example, <b>rvm use 2.5.0</b> will enable you to use ruby version 2.5.0

{% include disqus2.html %}
