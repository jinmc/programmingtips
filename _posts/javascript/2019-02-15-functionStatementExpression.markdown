---

layout: post
comments: true
title:  "Function Statements and expressions and first class functions"
date:   2019-02-15
tags: [Javascript] 
categories: javascript 

---

Function expression, would be a unit of code that results in a value.
For example, if we do 

    var a;
    a = 3;

This would as well set a to 3, and also return 3 as well.
It would be same for all kinds of operations, such as a + b, a / b,
and all sorts of functions.

Function statement, also sometimes called function declaration,
usually starts with a keyword function and then the function name, 
and then the block with the code context inside the block.

ex)
```javascript
function myFunction(a) {
    console.log('this is a function');
} 
```
It is different from function expression that it does'nt return anything.

Function expressions and Function Statements are important in JavaScript
more than in other languages because javascript itself has lot of functional 
features.

That is, inside Javascript, functions are a special type of objects.
We know that objects are a collection of name/value pairs. Function is a special
kind of object that can have a name which is optional and the value is the code inside the function.

What it means by first class functions is that we can use functions as variables 
such as functions can be passed as a variable, returned by another function or assigned
to a variable as well.

Let's take a look at following code.

```javascript
var greet = function() {
    console.log('hi');
}

```

In JS, this is a very commonly used pattern. It is using a first class function as a
function expression, as it returns a value of a function. 

To be more specific about above code, the variable greet is only saving the memory address of the function and the function has no name(anonymous). We can actually set the function name as ``function realGreet()`` but as we would invoke the function as greet(), 
there's no need to do.

Let's say we call ``greet()``.

It will surely output 'hi' when we call it after we set it.
But how about when we call it before setting it?

Let's checkout these two.

```javascript
greet(); // will cause an error!

var greet = function() {
    console.log('hi');
}


```

other : 

```javascript

greet(); // output `hi`

function greet() {
    console.log('hi');
}

```

Can you see the difference between these two?

To understand this, we need to understand what is happening,
including hoisting, which is another important concept in JS.
{% include disqus2.html %}
