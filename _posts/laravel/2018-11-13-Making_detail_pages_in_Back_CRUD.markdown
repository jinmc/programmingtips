---
layout: post
comments: true
title:  "Making detail pages in Backpack"
date:   2018-11-13
categories: laravel
---

Backpack is such a fantastic library,
and it is so convenient for simple crud functionalities.


But to do things outside the scope, things get complicated.
<br>One of the things I tried to do was to make a link from each items
in the list and to make a details page out of it.


To do this, I had to pass the row information to the next page,
something like the `parent_id` so it can get the 
information from the parent table.


I tried many and it's kind of difficult to do it,
but it is one perspective convenient, and one perspective not.


It has to pass the item by a certain way,
and it's called `Nested resources in Backpack CRUD`
and the post about it is here: [Nested Resources](https://backpackforlaravel.com/articles/tutorials/nested-resources-in-backpack-crud/). 

First, we have to make the link.
Backpack enables you to make it under actions.
You can remove the other default buttons(edit, delete, create buttons)
if you like.

You can add the href link in the model (which is kind of weird.. in my opinion)
set as a function, and return html link button
    {% raw %}
    public function doSomething(){
        <a href="{{ Request::url().'/'.$entry->getKey().'/child' }}/post" class="btn btn-xs btn-default"><i class="fa fa-eye"></i> See Posts</a>
    }
    {% endraw %}

So, the information is from $entry->getKey().
$this->id also works, too.

So this is how we pass variables.
But even though, problem exist.
The route would not get this if we don't define this in Web.php.

But we have to use `CRUD::resources' so it is quite tricky to get routing.

The trick is to use the routing like this

    Route::group(['prefix' => 'parent/{parent_id}/'], function() {
        CRUD::resource('child', 'ParentChildCrudController');
    });


Also, we can have control of ParentChildCrudController by 
extending the class childCrudController if we want to have something like
seperate view, or some other logic.

Of course, this is not it and we need to do more customizing,
but we can start from here.






{% include disqus2.html %}
