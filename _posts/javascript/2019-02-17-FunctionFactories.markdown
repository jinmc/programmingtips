---

layout: post
comments: true
title:  "Function Factories using Closures"
date:   2019-02-17
tags: [Javascript] 
categories: javascript 
---

With Closures, this kind of function factories are possible.

These are good in order that it lets people to avoid 
writing code with DRY principle.

```javascript

function makeGreeting(lan) {
    return function(first, last) {
        if (lan === 'en') {
            console.log('Hello ' + first + ' ' + last);
        }

        if (lan === 'es') {
            console.log('Hola ' + fisrt + ' ' + last);
        }

    }
}

var greetEn = makeGreeting('en');
var greetSp = makeGreeting('es');

greetEn('jim', 'ragon'); // outputs 'Hello jim ragon'
greetSp('jim', 'Carry'); // outputs 'Hola jim Carry'


```

So even though the makeGreeting execution context has ended 
when we called makeGreeting twice, 
it was executed individually and make seperate execution contexts,
so even though the execution contexts were removed from the call stack,
the closure memory of lan variable would still be there to hold the information.



{% include disqus2.html %}
