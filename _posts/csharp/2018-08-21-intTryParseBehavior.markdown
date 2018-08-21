---
layout: post
comments: true
title:  "Integer Tryparse Behavior"
date:   2018-08-21
categories: csharp
---

I used integer tryparse 
but today some error came out and found out 
I was not realizing the function of integer.

{% highlight csharp %}

int i = -1;
string s = "ab123";
int.TryParse(s, out i);

if (i == -1) {
	// do something
}

{% endhighlight %}

This was what I was doing to check if 
tryParse actually parsed the string or not.
But today, I came up with an error something like this..

{% highlight csharp %}

int i = -1;
string s = input();
int.TryParse(s, out i);
s = s.Trim();
if (s.length == 0 || i == 0) {
	// Error! Input should not be empty or 0!
}

{% endhighlight %}

Just to see that if it is 0 or not.
But it was actually sending an error when it was not 0.
So I realized that even though tryParse does not go through,
it would make the integer into 0.

So I changed my code into

{% highlight csharp %}

string s = input();
s.Trim();
if (int.TryParse(s, int out i) && i == 0) {
	// Error! not supposed to be 0!
}

if (s.length == 0) {
	// Error! not supposed to be empty!
}


{% endhighlight %}

and it works.


{% include disqus2.html %}