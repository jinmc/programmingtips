---
layout: post
comments: true
title:  "Post Format and Search Function of Jekyll"
date:   2018-08-20
categories: jekyll
---

There were two things I wanted for my blog..
first was to format my posts to not have the sidebar
and use the full screen. Actually this was because I couldn't find 
a way to use the sidebar on posts, mainly because sidebar follows the url
on YAML format and I don't know how to handle that problem.
<br><br>
But as this ain't a school project that has extremely tight regulations
and I am the only guy who sets restrictions, I just decided not to show sidebars in posts,
which may be okay, and makes sense, but the problem is, the space that used to have the sidebars 
were empty, even though they are not there, which makes absolutely no sense.
I could press the nav toggle button on the top, but pushing that button every time 
when I go into a post also makes no sense, so I tried to remove that space automatically.

The solution was pretty easy.. 
I had to first look at default.html, because that is where the javascript of the toggle function is.

The toggle function that shows looks as something like this...

{% highlight javascript %}

    <script>
        $(document).ready(function() {
            $("#tg-sb-link").click(function() {
                $("#tg-sb-sidebar").toggle();
                $("#tg-sb-content").toggleClass('col-md-9');
                $("#tg-sb-content").toggleClass('col-md-12');
                $("#tg-sb-icon").toggleClass('fa-toggle-on');
                $("#tg-sb-icon").toggleClass('fa-toggle-off');
            });
        });
    </script>

{% endhighlight %}

again, I don't really know what those do, 
but after a little experiment, I was able to manage to put these code
inside post.html, basically my layout for posts.

{% highlight javascript %}

    <script>
        $("#tg-sb-sidebar").toggle();
        $("#tg-sb-content").toggleClass('col-md-9');
        $("#tg-sb-icon").toggleClass('fa-toggle-on');

    </script>

{% endhighlight %}

I am not entirely sure how this is working.. but it works!

Another thing was to implement searching.
I really think it would have been a better idea if I made a seperate post for this,
but let's carry on for now..

For search, the developer tool and also the jekyll CLI when I host it on localhost 
was yelling to me always that search.json was missing so I knew there had to do something with that.
When I looked at <i>myURL/search.json</i> , they were actually returning valid json.

And I looked at the code in includes/topnav.html, which looked like this at the moment...

{% highlight html %}

                <li>
                    <!--start search-->
                    <div id="search-demo-container">
                        <input type="text" id="search-input" placeholder="{{site.data.strings.search_placeholder_text}}">
                        <ul id="results-container"></ul>
                    </div>
                    <script src="{{ "(( site.baseurl ))/js/jekyll-search.js"}}" type="text/javascript"></script>
                    <script type="text/javascript">
                            SimpleJekyllSearch.init({
                                searchInput: document.getElementById('search-input'),
                                resultsContainer: document.getElementById('results-container'),
                                dataSource: '{{ "(( site.baseurl ))/search.json" }}',
                                searchResultTemplate: '<li><a href="{url}" title="{{page.title | escape }}">{title}</a></li>',
                    noResultsText: '{{site.data.strings.search_no_results_text}}',
                            limit: 10,
                            fuzzy: true,
                    })
                    </script>
                    <!--end search-->
                </li>

{% endhighlight %}

and I simply changed site.baseurl/search.json into search.json,
and it worked, but only on htmls on the default folder, 
so the direct links which is directly connected to the sidebars were only appearing.

So I changed the searchResultTemplate to site.baseurl / url and it fixed the issue.

One more thing I did, was fixed the source to site.baseurl / js/jekyll-search.js
because it was not working before when it didn't have site.baseurl before.

Again, the double curly braces interprets the code automatically I can't use them 
as the code exactly.

{% include disqus2.html %}