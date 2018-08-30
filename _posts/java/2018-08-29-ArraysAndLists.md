---
layout: post
comments: true
title:  "Java arrays and ArrayLists"
date:   2018-08-29
tags: [java]
categories: java
---

Arrays and ArrayLists have each their own uses.

First, I'll talk how good ArrayLists are. I think the similar datapart for arrayLists
from C++ is Vector... and not sure about other languages.
There are also other List types, such as LinkedList, Vector, Stack

ArrayList is first great because it can be dynamically sized.
When making arrays, we should define the size of the array  and the size is 
not mutable. But for arrayLists, we can just initialize it and then add as many elements
as we want. For Java, another thing to note is that in arrayList, we cannot store 
primitive datatypes, but arrays can have primitive datatypes as well as objects.

Also, we can change arrays into arraylists and arraylists into arrays also.
This uses java.util.Arrays library, so we have to import either java.util.Arrays or java.util.*.

{% highlight java %}

    String[] strArr = {"jim", "mo"};
	
	List al = Arrays.asList(strArr);
	System.out.println(al);
	

{% endhighlight  %}

Also, we can switch arrayList to an array like

{% highlight java %}

        List<Integer> al = new ArrayList<Integer>();
        al.add(10);
        al.add(20);
        al.add(30);
        al.add(40);
 
        Integer[] arr = new Integer[al.size()];
        arr = al.toArray(arr);
 
        for (Integer x : arr)
        System.out.print(x + " ");
	

{% endhighlight  %}

Note that the initial arraylist was holding the integer object
so the transformed array also holds the Integer object.

{% include disqus2.html %}



