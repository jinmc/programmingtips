---
layout: post
comments: true
title:  "Arrays, Objects, and Collections in PHP"
date:   2018-10-12
categories: php
---

I got a data type from 

    DB::table('tableName')->
    where('column1', 'no')->
    get();

and I get an array of objects.

To make an object, 
we can do two things... 

we can either do 

    $object = (object) [
        'key1' => 'body1',
        'key2' => 'body2'
    ];

or we can do

    $object = new \stdClass();
    $object->key1='body1';
    $object->key2=22; 

will work similarly.

There is also this thing called Collections,
and it's actually not a PHP thing but a Laravel thing.

We use it to make arrays and stuff.


{% include disqus2.html %}
