---
layout: post
comments: true
title:  "PHP foreach and associative arrays"
date:   2018-10-11
categories: php
---

In C#, we do foeach function in this way..

```
foreach (string s in strArray) {
    Console.WriteLine(s);  // whatever print statement depending your platform..

}
```

which is quite straightforward to me.

and in PHP, we do this..

```
$things = array("this", "that", "those");
foreach ($things as $get) {
    echo "$get<br />";
}
```
so it's actually backwards in order of C#, 
and it's not as clear as C#, but I think I can get used to it.

And it gets more interesting with..

```
$smartphones = array("apple" => "iphone", "samsung" => "galaxy9", "lg" => "v30");
foreach ($smartphones as $key => $value ) {
    echo "$key = $value<br />";
}
```

These are called associative arrays, 
which are like map in java and dictionary in Python.

There are two ways initializing associative arrays in PHP.

One is to set

```
$ages = array("jim" => "13", "michelle" => "22", "jane" => "18");
```

or 

```
$age['Peter'] = "32";
$age['Ben']  = "12";
$age['Jim']  = "22";
```
{% include disqus2.html %}
