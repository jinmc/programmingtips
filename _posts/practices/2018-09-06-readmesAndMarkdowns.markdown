---
layout: post
comments: true
title:  "Readme and Markdown"
date:   2018-09-06
categories: practices
---

Reference : Udacity's Writing READMEs course

Even this post is written in markdown as well as all other posts but 
I think I don't really appreciate the full functions of markdowns 
and also I should appreciate more readmes in every projects I've written.

And also, there are github flavored markdown,
and there's also the markdown I'm using now on this blog.

Github's markdown is especially important because that's the readme format
on github repositories.

There are some formats that we may use for readmes, such as 
how to install, examples, licenses, shields... 

Basic syntacs are, for hash signs, the number of it will decide the size of it 
by putting `#` and space before any text.


# h1

## h2

### h3

If I indent 4 lines, it automatically 
embed like code-style.

    this is not code.

even it's not code.

Or we can put three backticks at start and end of the code.


Also, you can make it itallic or bold by putting the code between two stars or (one at the side each) underscores.. by github flavors,

**BOLD!**

_ITALIC~~_

seems like it also works here,

and there'se also inline code with single backticks... 

`code`

We can learn more from link : https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github/

{% raw %}
    [this](link)
{% endraw %}

would be an easy example of making a link.

`Dillinger` is also a good tool if you want to see what the markdown will actually look. https://dillinger.io/ 

Also, whenever you want to put in double curly braces, jekyll will complain.
In that case, you could put it inside raw curly braces in between percent signs.

{% raw %}
    {{ $variable }}
{% endraw %}

{% raw %}
   {% raw %}
   like this and put endraw instead of raw at the end
{% endraw %}

{% include disqus2.html %}
