---
layout: post
title:  "Javascript let vs var"
date:   2018-05-08
categories: jekyll update
---

Conversion from Java to C# was pretty easy. In fact, now I am usually using mostly C#, much more than Java,
and feel so comfortable about it. C, Java, C#, C++, are kind of.. similar.

But JavaScript is different.
It seems easy, but it is a scripting language.. (honestly, I don't know how it's interpretted)
Anyway, in C#, there is var, but it is actually same as strong-typing because it figures out the data type
and it is actually representing that datatype... 

In other words,
{% highlight csharp %}
	var s1 = "string";
{% endhighlight %}
this is same as 
{% highlight csharp %}
	string s1 = "string";
{% endhighlight %}

but just saying var instead of string.
JavaScript has var, but it is quite different with the C# var.
First of all, it can change data types even if it is defined as one.
It can be an integer, float, and string and in C# it's not allowed.

The scope is also tricky.
This example may give a hint : 
{% highlight javascript %}
	var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
} 

console.log(a); // 11
console.log(b); // 2
{% endhighlight %}

So, in terms of scope, let is the conventional variable-like thing happening here.
for variable, the scope is global, and you declare the variable again .. 
(which is so weird because in compiling language this will give an error..)

