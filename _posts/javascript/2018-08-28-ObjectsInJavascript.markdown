---

layout: post
comments: true
title:  "Obejcts in Javascript"
date:   2018-08-28
tags: [Javascript] 
categories: javascript 

---

references : W3school (https://www.w3schools.com/js/js_object_prototypes.asp)

Java is an object oriented language.
Apart from 8 primitive datatypes, which are
Character, Boolean, Integer, Long, Short, Byte, Float, Double.

Similar to that, javascripts is almost everything is formed in objects.
And the primitive datatypes, there are 5 of them.

string, number, boolean, null, undefined.
primitve values are immutable.
Primitive value is a vlaue that has no properties or methods.

Booleans, Numbers, String can also be objects if defined with the new keyword.
Objects can have properties, and also have methods.
To add a method, we can set up a function as a value of an object.

Another thing we should know about objects are that 
objects inherit properties and methods from a prototype.

There are many kinds of prototype, like Date.prototype, Array.prototype,
and the objects all inherit from object.prototype.
We should only modify our own class's prototypes, not the prototypes of standard Javascript objects.

For Example :
{% highlight javascript %}

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

{% endhighlight %}

Even functions can be objects, 
and they have prototypes also, as Function.prototype.
The Bind function we use comes from here.

{% include disqus2.html %}