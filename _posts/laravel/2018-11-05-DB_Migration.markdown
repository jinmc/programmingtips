---
layout: post
comments: true
title:  "DB migration and seeding"
date:   2018-11-05
categories: laravel
---

In Laravel, making tables and managing db is 
convenient and easy to manage by migration and seeding.

To create a migration, we can conveniently use the php artisan command

    $php artisan make:migration create_users_table

and also `--table` and `--create` options can be useful
when you know the table names or want to create a table.

`--seed` would be great option to seed the database.

 


{% include disqus2.html %}
