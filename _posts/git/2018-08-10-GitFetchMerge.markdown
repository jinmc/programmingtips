---

layout: post
comments: true
title:  "Git Fetch and Merge"
date:   2018-08-10
tags: [git]
categories: git

---

I've heard many times that instead of using <b>git pull</b>, 
we should use <b>git fetch</b> and <b>git merge</b> instead, but didn't fully understand what was going on.
<br /><br />
So let's say we have a local master, which has 1 commit,
and have a remote origin master, which has 3 commits,
<br /><br />
If I call <b>git pull origin master</b>, it will automatically update my master to 3 commits,
syncing with the remote origin/master. Which means updating my local branch in sync with the remote branch.
<br /><br />
On the other hand, if we call git fetch origin master, it will download the original code,
but it will not merge automatically, which means that it will not affect our local repository.
 So we have two branches, the local <b>master</b> branch
and the <b>origin/master</b> branch which will be ahead of our current master branch.
<br /><br />
In this case, all we have to do is to stay in our branch, and call
<b>git merge origin/master</b> and then the local will be in sync with the local master.


{% include disqus2.html %}