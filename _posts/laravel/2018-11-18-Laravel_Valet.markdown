---
layout: post
comments: true
title:  "Laravel Valet Intro and uses"
date:   2018-11-18
categories: laravel
---

Laravel Valet is Mac OS only tool, so this won't probably 
have value that much for windows or linux users.<br>
But it's perfect for me,
because due to my current work, I have to practice and learn Laravel, 
preferably with a virtual environment, but not with just php artisan serve.
<br><br>
To fully run virtual environment with vagrant, the preferable environment
is to have more than 12GB of memory.<br>
My Mac has only 8Gbs, and I figured there is no way to add the ram in this model.
I would have to solder it.. and I'm not good at hardware hacks.
<br><br>
The full document is here : [Laravel_Valet](https://laravel.com/docs/5.7/valet)
<br><br>
The advantage of it is that I don't have to configure the etc/hosts/ file like 
I have to do with windows.<br>
Also, I can type `valet park` in the path where I have directories of the 
projects I have.<br>
We can find the directories I have parked with `valet paths`.<br>
And also we can remove the paths we have parked, of course,
by typing `valet forget` in those directories.
<br><br>
After parking, we can automatically access the projects by inputting the url
`project_name.test`. <br>.test will be accessing 127.0.0.1 by default 
even though you don't type program_name in front of it.<br>
We can check this with `ping foobar.test` in the terminal.
<br><br>
We can also make a public url, to share it,
by going into the project repository and typing `valet share`,
and it will give us the public repository. For me, this is crazy.
<br><br> 
But apart from Homestead, which is another tool to make virtual environments easy,
you don't even have to have php or database installed,
Valet requires you to have php installed, and local database also.<br>
Again, refer to the full documentation for this.
<br><br>
Lastly, the cool thing about valet is that we don't even have to 
start it everytime we start our computer.<br>
It automastically starts whenever we start our machine,
but you can easily manually do this if you want, by doing
`valet stop` to stop valet,
`valet start` to start the valet,
and `valet restart` to restart valet.



{% include disqus2.html %}
