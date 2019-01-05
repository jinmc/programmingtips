---

layout: post
comments: true
title:  "How Javascript Engine works"
date:   2019-01-02
tags: [Javascript] 
categories: javascript 

---

This could be a summary of what I've learned from the udemy course
<br>
**javascript the weird parts**
<br>

When you open any kind of webpage, 
javascript will basically make a execution context,
and the first execution context is called a global execution context 
which is the base of everything.

Each execution context can also contain 
another execution context,
for example, another function is defined and invoked 
inside another function, than that inside function should create
another execution context inside the original one.

Each execution context would also have a local memory by themselves,
which will store the variables and also the function 
which is hoisted and stored as all at the creation phase.


When a function is invoked(called), 
a new execution context will be created within the global execution context,
and inside that new execution context will also have a local memory 
and also create another executin context inside it.

Here is a good example I found.
This is also a really good article about variables in javascript.
<br>
https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

```
// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);
```

This could seem really mezmerizing at first, without knowing how the javascript engine
works in the back.

First, in the global execution context, inside local memory the variable species 
would be declared and assigned as the string human.
Next, the transform function would be stored in the memory, which would also be called
hoisted.

After, the console.log would call the species, which would be in the local memory of 
global execution context.

Next, it will invoke the transform function and create a new execution context
which is the transform function.

Inside that execution context, the local memory would store the species variable
and store string werewolf inside that local memory, 
and then print out that species value, werewolf.

After that, we are done with the transform execution context
so it will be removed from the call stack.

By the way, call stack is what we stack when new execution contexts
are created, and be vanished when they are finished invoked.

There is one exception to this, which is closure.

Anyway, after this execution context is gone,
the species variable is printed again, and this time
it will print out the value of the species inside the global execution context
local memory.


{% include disqus2.html %}
