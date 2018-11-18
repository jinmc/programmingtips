---
layout: post
comments: true
title:  "PHP View and laravel blade template"
date:   2018-11-18
categories: laravel
---

For views, we can easily do 

`<?php echo $var; ?>` or use `<?= $var; ?>`
which is equivalent as well, to show a variable.<br><br>

To send data, first, you can send the data
directly from the `web.php`, with such intuitively.
<br><br>
    Route::get('/', function() {
        return view('welcome', [
            'var' => 'something important'
        ]);
    });

This might get confusing at first,
and I did too, because the variable name 
is matching the string, which is not that common thing 
in my experience. <br>
But I guess this is laravel's conventions of passing data.<br>
Also, there is a php function used very much dealing with this,
which is `compact()`, when you have the variable outside the fucntion,
but it has to match the name. For example,
<br><br>

    $var = 'something important';

    Route::get('/', function() {
        return view('welcome', compact('var'));
    });

Which will do the exact same thing as above.<br>
We can have more than one variables in the compact function.
<br><br>
Inside the blade template,
we could use php logics, such as foreach, if, else, while, 
those sort of logics. <br>
This is the example of using foreach.
<br><br>

    <ul>
      <?php foreach ($tasks as $task) : ?>
        <li><?= $task; ?></li>
      <?php endforeach; ?>
    </ul>

This is pure vanila php, but we can surely make this simple,
using blade template.

    {% raw %}
    <ul>
      @foreach ($tasks as $task)
        <li>{{ $task  }}</li>
      @endforeach
    </ul>
    {% endraw %}
{% include disqus2.html %}
