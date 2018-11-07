---
layout: post
comments: true
title:  "DB migration and seeding in laravel"
date:   2018-11-05
categories: laravel
---

In Laravel, making tables and managing db is 
convenient and easy to manage by migration and seeding.

To create a migration, we can conveniently use the php artisan command

    $php artisan make:migration create_users_table

and also `--table` and `--create` options can be useful
when you know the table names or want to create a table.

Also, when you want to refresh, that is, to erase all tables and
make tables again, we can use the command with or without the seed command

    $php artisan migrate:fresh (--seed)

There are also refresh (--seed).
The difference between fresh and refresh is, 
refresh will roll back all the migrations and then execute the migration.
Meanwhile, fresh will drop all the tables from the database and then execute the migrate command.

In some sense, fresh is more powerful.

Also, `migrate:reset` will roll back all the migrations.

when making a seeder, we can also use the php artisan command
    
    $php artisan make:seeder SomeTableSeeder

sometimes in error, (ex: changing seeder name)
this might help

    $composer dump-autoload





{% include disqus2.html %}
