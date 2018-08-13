---

layout: post
comments: true
title: "string and String in C#"
categories: csharp
---

string is an alias of String in C#.

That means, it would just call the class String without the directive of "using System.String;" in the above.

What I really wanted to point out was that 
string, and also String, is a class.
This didn't occur to me even though I was using string every day.
But today, it occurred to me that ints had nullable types... 
of which Java did not have.. 

That means you cannot set null to an int.
And I've seen somewhere int is a struct, 
another data structure I'm not that familiar of...

So that means, string is not a struct!
Because structs should not be null, 
and I saw a string become null and the compiler was fine...
And that was when the fact that string is a class really occurred to me. 

So.. I guess knowing the difference between structs and classes was the 
key here.
By the way, this is a funny stack-overflow article I saw about structs 
and classes.. 

And searching in stack overflow, I figured that 
structs use stack space but classes are reference type and uses the heap 
with pointers.

This is the post : https://stackoverflow.com/questions/13049/whats-the-difference-between-struct-and-class-in-net

{% include disqus2.html %}
