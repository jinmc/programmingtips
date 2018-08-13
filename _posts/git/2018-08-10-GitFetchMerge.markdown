---

layout: post
comments: true
title:  "Git Fetch and Merge"
date:   2018-08-10
tags: [git]
categories: git

---

I've heard many times that instead of using git pull, 
we should use git fetch and git pull instead, but didn't fully understand what was going on.
<br />
So let's say we have a local master, which has 1 commit,
and have a remote origin master, which has 3 commits,
<br />
if I call git pull origin master, it will automatically update my master to 3 commits,
syncing with the remote origin/master.
<br />
On the other hand, if we call git fetch origin master, it will download the original code,
but it will not merge automatically. So we have two branches, the local 'master' branch
and the 'origin/master' branch which will be ahead of our current master branch.
<br />
In this case, all we have to do is to stay in our branch, and call
'git merge origin/master' and then the local will be in sync with the local master.


{% include disqus2.html %}