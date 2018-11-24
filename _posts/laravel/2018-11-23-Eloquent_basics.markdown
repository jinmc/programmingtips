---
layout: post
comments: true
title:  "Eloquent Basics"
date:   2018-11-23
categories: laravel
---

After working with Php Laravel for a bit,
my impression with this is that this is an easy, practical
framework to deal with.<br>
Especially with databases, with such easy migrations and 
seeders, and also, eloquents.<br><br>

In eloquent, wee can access the model by just writing the model class
with the namespace prefix of it. Default is usually App
so these are some few examples,<br><br>

`App\Task::all(), App\Task::find(2), App\Task::where('completed', 1)`
<br><br>
and what they do would be trivial. 

`pluck` is also a good function to display only wanted attributes,
like this<br><br> `App\Task::pluck('body');` or, `App\Task::pluck('body')->first();`
<br><br>if you want only the first element.`
<br><br><br><br>
We can also put functions inside model classes, as weird it may be seem at first.

First, we can make a function that an instance of it can call it.<br>
For example, we can make an instance like

    $task = Task::find($id);
    $task->someFunction();

and also, we can make a function static.

    public static function incomplete() {
        return static::where('completed', 0)->get();
    }    

    Task::incomplete();

will give the results of incomplete queries.

Finally, we have query scopes.<br>
In query scopes, there are local query scopes and global query scopes,
and we can find out [here](https://laravel.com/docs/5.7/eloquent#query-scopes) 
<br><br>
The point of query scopes is that we can chain and use more queries on the query scopes.
What I mean by that will be shown by example.

    public function scopeIncomplete($query) {

        return $query->where('completed', 0);

    }

    App\Task::incomplete()->where('id', '>', 2)->get();

And we can chain the queries like this.

{% include disqus2.html %}
