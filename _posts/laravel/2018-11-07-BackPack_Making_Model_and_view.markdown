---
layout: post
comments: true
title:  "Making DB model and view, in Backpack"
date:   2018-11-07
categories: laravel
---

Taking advantages of the php artisan commands,
and the full document is here : https://laravel-backpack.readme.io/docs

    $php artisan make:migration create_somethings_table

we can use `--create` option, or `schema` option like,

    $php artisan make:migration:schema create_tags_table --model=0 --schema="name:string:unique"

Not sure what the --model=0 does for now

    $php artisan make:model Tag

will make the model

actually, we don't even have to make the model because the backpack command will do it for us.

    $php artisan backpack:crud tag

and we have to use singular, not plural.

After using this, we just have to deal with the routing in web.php
and put `CRUD::resource('tag', 'TagCrudController');`







{% include disqus2.html %}
