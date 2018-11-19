---
layout: post
comments: true
title:  "Query Builder and Eloquent"
date:   2018-11-18
categories: laravel
---

After setting up the database with migrations and actually migrating them,
we have to get data from databases. <br>
We could just do raw sql queries and [here](https://laravel.com/docs/5.7/database) are also examples,
but we can also use what laravel wants us to do, by using query builders and eloquent queries.
<br><br>
We can easily get all the data or some of the data,
by the get command.<br>
Let's say we get it from the web.php.

    Route:get('/', function() {
    // $things = DB:table('things')->where('col1', 2)->get();
    // it will get things where col1 = 2
      $things = DB:table('things')->get();
      return $things;
    });

And it will return json for things.<br>
If we want to pass it to the view, we can simply do<br>
`return view('someView', compact('things');` as well.
<br><br>
And in the view, we have to specify the key we are getting 
because if we want to echo out an object, it won't work.<br>
That means, we should do something like this

{% raw %}
    @foreach($things as $thing)
      <li>{{ $thing->name }}</li>
    @endforeach
{% endraw %}
    

Also, passing indexes can be done in this sense.
For example,

    Rout::get('things/{id}', function($id) {
      $thing = DB::table('things')->find($id);
      
      return view('tasks/show', compact('thing'));
    });

We could also use `tasks.show` instead of tasks/show.
<br><br>
The one thing I would like to point out is that 
the id in the curly braces can be anything.<br>
It won't affect the routing fetching of laravel.
<br>
As we have the url routing enabled,
we can get along with links through that routes, and a href.




{% include disqus2.html %}
