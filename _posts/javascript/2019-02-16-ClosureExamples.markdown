---

layout: post
comments: true
title:  "Closures Examples"
date:   2019-02-16
tags: [Javascript] 
categories: javascript 
---

Let's take a look at this code.
This is a famous example when understanding closures.

```javascript

function buildFuncs() {
    var arr = [];
    for (var i = 0;i < 3;i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var funcs = buildFuncs();

funcs[0](); // outputs 3
funcs[1](); // outputs 3
funcs[2](); // outputs 3

```

Without looking at the output, it is natural to assume 
outputs to be 0, 1, 2, but it ouputs 3 altogether, 
because of the closure.

The execution context of buildFuncs will have a variable
i, and the array will have 3 anonymous functions.
After buildFuncs have finished, the execution context will be removed
from the execution stack but the memory of i would be still there i = 3.

To fix this to output 1, 2, 3, we can do the following.

```javascript

function buildFuncs() {
    var arr = [];
    for (var i = 0;i < 3;i++) {
        arr.push(
            function(i) {
                console.log(i);
            }
        )
    }

    return arr;
}

var funcs = buildFuncs();

funcs[0](0); // outputs 0
funcs[1](1); // outputs 1
funcs[2](2); // outputs 2

```

But this case we have to pass in the parameter to get it!
Can we do it without passing the parameters?

In ES6, the let variable is a variable 
that lives in the context of a block, 
so inside the for loop it will make a new let 
every time.

```javascript

function buildFuncs() {
    var arr = [];
    for (var i = 0;i < 3;i++) {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}

var funcs = buildFuncs();

funcs[0](); // outputs 0
funcs[1](); // outputs 1
funcs[2](); // outputs 2

```

This will work.

Without let, we can use IIFE(Immediately invoked Function Expressions)
IIFEs actually execute the function immediately thus they make the execution 
contexts each, which will have a memory space for is individually.
In this case, j.

```javascript

function buildFuncs() {
    var arr = [];
    for (var i = 0;i < 3;i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var funcs = buildFuncs();

funcs[0](); // outputs 0
funcs[1](); // outputs 1
funcs[2](); // outputs 2

```



{% include disqus2.html %}
