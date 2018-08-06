---
sidebar: mydoc_sidebar
layout: post
comments: true
title:  "sql query with cte"
date:   2018-07-19
categories: sqlquery
---

I posted this question on stack overflow, and got this amazing answer.. love you stack overflow..

By the way, this is the link to it :

https://stackoverflow.com/questions/51405616/query-update-except-latest-data-on-same-conditions

I have a scenario to update the rows within the same condition(status = 1) but not the latest row. So this is the table design.

--------------------------------------------------<br>
|idx     | status | var1  |  date<br>
--------------------------------------------------<br>
| 2      |  1         |  cat    | 2018-06-17 15:41:32.110      <br>
| 3      |  1         |  dog   | 2018-06-17 11:41:32.110<br>
| 2      |  1	      |  lamb | 2018-06-17 11:41:32.110<br>
| 2      |  1   	  |  pc      | 2018-06-17 09:41:32.110<br>
| 3      |  1    	  |  doll    | 2018-06-17 09:41:32.110<br>
What I want is to get all the same conditions where idx is equal and status = 1, and update the status to 0 except the most recent row. In this case, there are 3 rows which have idx of 2 and status = 1, and 2 rows which have idx of 3 and status = 1. After the query, the table should look like this
<br><br>
--------------------------------------------------<br>
|idx     | status | var1  |  date<br>
--------------------------------------------------<br>
| 2       |  1        |  cat    | 2018-06-17 15:41:32.110      <br>
| 3       |  1        |  dog   | 2018-06-17 11:41:32.110<br>
| 2       |  0        |  lamb | 2018-06-17 11:41:32.110<br>
| 2       |  0        |  pc      | 2018-06-17 09:41:32.110<br>
| 3       |  0        |  doll    | 2018-06-17 09:41:32.110<br>
I have no idea how to do this and tried to at least display the rows which has more than 1 equal conditions and came up with this query

select Idx, status, COUNT(Idx) as count from table 
group by Idx, status
having COUNT(Idx) > 1 and status = 1
order by Idx
This shows how many rows I have in the same condition, but I would also like to have rows to display var1 and date but I don't know how to do that.

As I am working in a .Net development, I could make a list of idx to a list and do a for loop on each idx and update in that for loop, but I would love to learn more about sql, how to solve this through.

{% include disqus2.html %}