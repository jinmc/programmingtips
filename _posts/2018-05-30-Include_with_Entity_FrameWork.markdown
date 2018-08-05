---
layout: post
comments: true
title:  "Include function with entity framework"
date:   2018-05-30
categories: jekyll update
---

Before I begin, I would like to refer to some links I have read for additional explanation,
because this is a huge subject, and there are many aspects to it.

Lazy Loading vs Eager Loading : https://www.c-sharpcorner.com/UploadFile/b1df45/lazy-loading-vs-eager-loading/
Include Function in Entity Framework : http://foreverframe.net/when-use-include-with-entity-framework/
Select N+1 Problem : https://www.codeproject.com/Articles/102647/Select-N-Problem-How-to-Decrease-Your-ORM-Perfor

To write about this, I would have to refer to another big topic which is 
eager loading vs lazy loading, because without these concepts it would be impossible 
why we are using include function.

When I first started using EF, I thought of it as brilliant that I didn't have to 
write SQL statements and use all sorts of sqlDataReader and SqlAdapter and 
those things.. but I didn't  really appreciate what was the advantage of it.
Also, I didn't know that when I am using ORM such as EF, the default was lazy loading.

So, to make a simple explanation about lazy loading and eager loading, 
lazy loading is executing the query just when it's needed,
and eager loading is executing the query at the beginning, 
assuming that the results are the same. 

I didn't know it, but I even used eager loading
while not even realizing it.

Lazy loading is cool. 
With lazy loading, we can actually get 
all the database into code and just not call them
and we are going to be fine because it's not loaded!

The benefit of this is that as we got the database from the backend ,
we can use intellisense and ORM based on it.

Now, I'll provide an example that I used eager loading 
without even noticing.. (hillarious, when thinking about it.. )

so, the case is that I have a product
and I need to find products that have products for a specific skid.

And I want to insert a data that has the product IDs in it.. 
so what I did is, 

I got a list of indexes 


{% highlight csharp %}

            string sql = $"select idx from <tableName> " +
                         $"where <skidIndex> = {skidNumInt}";
						 
            List<string> resList = Utils.getQueryRecordWithMonoArray(sql);
            List<int> resIntList = new List<int>();
            foreach (string s in resList)
            {
                int i = 0;
                int.TryParse(s, out i);
                resIntList.Add(i);
            }
			
			foreach (int i in resIntList)
            {
					do query... with i... 
            }
			
{% endhighlight %}

This was using eager loading without even noticing.
It would be nice to implement this with include..



{% include disqus2.html %}