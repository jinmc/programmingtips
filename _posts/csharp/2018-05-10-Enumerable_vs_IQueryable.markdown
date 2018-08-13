---
layout: post
comments: true
title:  "IEnumerable vs IQueryable"
date:   2018-05-10
categories: csharp
---

There are two datatypes in C# .NET, which are IEnumerable, and IQueryable as well.
Honestly, I do not know the difference between the two even now.
The power of var pre-definition just makes me use it even though I do not know where it should go for sure.

Anyways, today I'm not talking about .NET. 
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

{% include disqus2.html %}