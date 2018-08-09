---
layout: post
comments: true
title:  "Controlling Controls in WinForms"
date:   2018-05-21
categories: winforms
---

Making desktop applications in Winforms is quite straightforward.
As a matter of fact, the graphical interpretation is much more efficient than Java.. 
to my perspective. 

Still, there are things that if you don't know, you don't know. 
I was making this application that gets data from the database, 
and checks the checkboxes if the data is right.

And after that, it should get the checkbox names as strings 
and update the database as well.

I didn't know how to do this, and stack overflow and got this code.

{% highlight csharp %}

            List<string> defCodes = DefectActions.GetDefCodes(jNumTBox.Text);
            if (defCodes != null)
            {
                foreach (string defCode in defCodes)
                {
                    if (this.Controls.Find(defCode, true).FirstOrDefault() is CheckBox chk)
                    {
                        chk.Checked = true;
                    }
                }
            }

{% endhighlight %}

So, this gets the checkboxes from this.Controls.
But later, I tried to get the checkboxes by
this.Controls, something like...

{% highlight csharp %}

foreach(Control c in this.Controls)
{
   if(c is CheckBox)
   {
		// do thing here
   }
}

{% endhighlight %}

but turns out this doesn't work for gathering data from this.Controls.
It turns out that this.Controls has only two components, 
and we have to get in to the child component recursively to get the checkboxes.

To do this, I turned to stack overflow once again and found out that I can use a helper function 
which will go through every child recursively and get the controls 
which will be, 

{% highlight csharp %}

        public IEnumerable<Control> GetAll(Control control, Type type)
        {
            var controls = control.Controls.Cast<Control>();

            return controls.SelectMany(ctrl => GetAll(ctrl, type)).Concat(controls).Where(c => c.GetType() == type);
        }


{% endhighlight %}


{% include disqus2.html %}
