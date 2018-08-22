---

layout: post
comments: true
title:  "Map, Filter, Reduce (1) - Map"
date:   2018-08-22
tags: [Javascript] 
categories: javascript 

---

I know I have a post about funtional programming in javascript,
but that was leaping before walk.

Let's just start with the basics here :
A nice post ..<br><br>
<i>https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464</i>
<br><br>

So what it is actually saying is, 
you use map when you want to use a for loop for every items in your array to do some operation,
and use filter when you want to use a criteria and get only certain items.
and use reduce when you want to add up the values or something like that.

and let's look at some examples.

{% highlight html %}

	let animal_names = animals.map((animal, index, animals) => {
			return animal.name
	})

{% endhighlight %}

when animals are an array in which it has objects
that contains names as key and strings as values.
The first argument will be the each actual item,
index will be index, animals will be the array itself.
<br><br>
Also, this is the official javascript documents
<br><br>
{% highlight javascript %}

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

{% endhighlight %}

and it shows that apart from the each items, 
everything is optional and it can be omitted,
actually, the above code could also be reduced to 

{% highlight html %}

	let animal_names = animals.map(
			animal => animal.name
	})

{% endhighlight %}

so that we can even omit the return directive.
It feels really strange to get rid of the return statement 
in my honest opinion, because in other programming languages
this will certainly give an error ... the only case it will not give you an error
would be when your return type is void, but that's not the case here.
<br><br>
It's also confusing because if you're not used to the map function,
you might be confused with the let keyword and have no idea that it would be an array....



{% include disqus2.html %}