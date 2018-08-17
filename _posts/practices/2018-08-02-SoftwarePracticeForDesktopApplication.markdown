---

layout: post
comments: true
title:  "Title Text when live and test database in winforms"
date:   2018-08-02
tags: [C#]
categories: csharp winforms practices

---

This is just simple tip.. 

Right now, my company has a test db, and working live db.
Whether we use one or not, we didn't know which one we are using
unless we look at the data or the source code. 

I made the windows form title to display
'app title - Live' or 'app title - Test' on the text of the form.

This is a simple practice and the code would look something like this

{% highlight csharp %}

        public Form1()
        {
            InitializeComponent();
			bool flag = figureIfLive();
            if (flag)
            {
                Text = "apptitle - Live";
            }
            else
            {
                Text = "apptitle - Test";
            }
        }

{% endhighlight %} 

It's this simple, but really useful and honestly,
I have no idea why I didn't do this and took me 1 year to actually to this.

I would also do this for web apps, 
but haven't done it yet.

{% include disqus2.html %}