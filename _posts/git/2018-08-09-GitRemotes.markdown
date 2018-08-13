---

layout: post
comments: true
title:  "Git Remotes"
date:   2018-08-09
tags: [git]
categories: git

---

This is an interesting topic because most of the time we use git with remote repositories.
Such as github or bitbucket or else. 

By the way, github is the go-to site from when I was in school but it only let's you 
limited amounts of free private repositories if you are not a student so nowadays I use bitbuckets more.
It let's you to use free private repositories unlimited.

1. git remote 
 --> will return the git remote name I have given. mostly Origin.
 
 2. git remote -v
 --> will give the exact remote repository (ex : origin https://github.com/id/something)
 
 3. git remote set-url origin (https://bitbucket.com/username/repository.git)
 --> Changing the git remote to another.. Enables me to push to multiple remotes, such as bitbucket and github



{% include disqus2.html %}