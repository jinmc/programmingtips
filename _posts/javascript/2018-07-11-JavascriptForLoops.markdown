---
layout: post
comments: true
title:  "Javascript for loops"
date:   2018-07-11
categories: javascript
---
In JavaScript, I am looking into looping, and there are certain ways to loop.
Of course there are basic things as for loop, while loop, do while loop, .. 
but there are two new (to me..) loops, which are for in loop, and for out loop.

The description of for-in loop :
"This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, 
allowing statements to be executed for each distinct property."

```javascript

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
  text += person[x];
}

```

and description of for-of loop :
"This loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc.

```javascript

const iterable = ['mini', 'mani', 'mo'];

for (const value of iterable) {
  console.log(value);
}


```

It essentially iterates over the value of each distinct property in the structure, 
such as each letter in a word or each element in an array.

Also for arrays, you could also use foreach,
which is embedded in array's prototype so we can 
only use it to an array.

We can also can get the indexes in foreach also.

```javascript

arr.forEach(function(element, i) {
  console.log('Element', i, 'is', element);
});

```

This is a good post for this topic
https://medium.com/@abustamam/for-loops-vs-foreach-in-javascript-7a977278a39e



{% include disqus2.html %}
