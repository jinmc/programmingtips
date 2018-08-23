---

layout: post
comments: true
title:  "Git Reverts and going back to previous commit"
date:   2018-08-23
tags: [git]
categories: git

---

Reference : https://www.youtube.com/watch?v=3dk3s4LK-Wg

I came across this issue while making react able for my Jekyll site, 
and then I realized that I should not do it that way.. 
But I made several commits, so I wanted to just remove all the commits.
<br><br>
Simple as this can be is, after typing <b>git log</b>,
we can jsut go to the commit hash, 
and do 

<br><br>
<b>git reset --hard <i>HASH123</i></b>
<br><br>
and then it will change.
If you had pushed to the github before,
git won't let you to push it, so you should also force it...
<br><br>
<b>git push --force</b><br><br>

but.. there are simpler, (actually this is also simple enough.. )
solutions too. 
<br><br>
If you didn't add or commit your changes,
you can simply do..
<br><br>
<b>git checkout -- filename </b> <br> or..<br>
<b>git checkout -- . </b> <br><br>
if you have more than one file.
<br><br>
There is also this git revert thing that can save you the history in log
<br><br>
<b>git revert <i>HASH123</i></b><br><br>
and you will be allowed to write a message and the revert will be commited as a commit.

You can also not commit it by using the "-n " option in git revert.
The working tree will be reverted but it would not be committed.


{% include disqus2.html %}