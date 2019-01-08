---
layout: post
comments: true
title:  "Software Engineering Practices... Error"
date:   2018-06-29
categories: practices
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

The reason why is because even if string is empty, it won't go for str.isEmpty()
function because the two functions are connected with || (or)  operator 
and empty string is not null so it will just get true from the former condition.

A quick and easy fix for this would be replacing the or operator 
with && (and) logical operator. 

Then, if the str!= null is true, which means string is null,
it will have to go through !str.isEmpty() to go inside the if clause.

The caveat of this is that,
and this is kind of funny, 
which is that this is written in C#,
and C# has a function on string datastructure

{% highlight csharp %}

s.isNullOrEmpty();

{% endhighlight %}

Also there is a stackoverflow post regarding this if anyone 
is looking for further references : 
https://stackoverflow.com/questions/1795808/and-and-or-in-if-statements


{% include disqus2.html %}
