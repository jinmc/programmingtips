---
sidebar: sidebar_nav
layout: post
comments: true
title:  "Git Remote Error"
date:   2018-08-09
tags: [git]
categories: git

---

Using git, the hardest things are solving the errors caused by it.
I now have an error, pushing the software version which is the latest.

This is the git error thrown by the git bash : 

{% highlight bash %}
$ git push
To https://bitbucket.org/username/repository.git
 ! [rejected]        addReserve -> addReserve (fetch first)
error: failed to push some refs to 'https://id@bitbucket.org/username/repository.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
{% endhighlight %}

and it says that 

{% include disqus2.html %}