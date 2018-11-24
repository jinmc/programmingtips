---
layout: post
comments: true
title:  "Making Controllers in Laravel"
date:   2018-11-24
categories: laravel
---

We can use `php artisan make:controller SomeController` to make a controller.<br>
But to use a controller, we have to set a route from web.php file.<br>
<br>
So the actual purpose of controller is to make the web.php file to just set to routing
and do the logic inside the controller.<br>
<br>
The controller has functions
that return view and that has the function name 
inside the web.php file.
<br><br>
But routing examples are worth nothing.

    Route::get('/tasks', 'TasksController@index');
    Route::get('/tasks/{id}', 'TasksController@show');

and in controller,

    public function show($id) {
    	$task = Task::find($id);

	return view('tasks.show', compact('task'));
    }    

And one special thing is called route model binding,
and it let's you to get the model from the routing.<br>
But to do this, you have to use the same variable name as the passing parameter.
<br><br>
That is, we should use

    Route::get('/tasks/{task}', 'TasksController@show');

and use

    public function show(Task $task){
        return view('tasks.show', compact('task'));
    }

{% include disqus2.html %}
