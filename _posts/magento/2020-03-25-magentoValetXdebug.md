---
layout: post
comments: true
title:  "Configuring Xdebug on Magento 2.3 with Valet"
date:   2020-03-25
categories: magentobackend
---

<h2>Magento 2 on valet(plus) with Xdebug</h2>

<p>
I am a little ashamed to say that until this day I haven't set up XDebug until today.
Some excuses I had was.. 
</p>

<ol>
<li>I tried but it didn't work... I don't want to spend so much time</li>
<li>I have other priorities...</li>
<li>I can do similar things with logging</li>
<li>Or.. is it even possible???</li>
</ol>

<p>
But today I had it enough. It couldn't take it no more. I was working from home, and I did not have enough task for today. I had to do this. so I found two references that would be super useful... and it was
</p>

<ul>
<li>https://magenest.com/en/debug-magento-2-code-xdebug-phpstorm-1/</li>
<li>https://medium.com/@hhsadiq/installing-xdebug-with-laravel-valet-on-mac-and-linking-with-phpstorm-9a1c562d1b7d</li>
</ul>

![image tooltip here](/assets/xdebug1.jpg)

<p>
Note that remote_port is 9001 instead of 9000, and remote_host is 172.30.1.16 instead of 127.0.0.1 which I got from open networrk preferences. Not so sure the remote_host matters that much. After setting two things in Preferences. Reference :
https://dmytropoperechnyy.com/how-to-debug-with-phpstorm-valet-and-xdebug/
</p>

<ul>
<li>Preferences -> Languages & Frameworks -> PHP -> CLi interpreter should be ~/.composer/vendor/weprovide/valet-plus(this actually not done by my system but works)</li>
<li>Preferences -> Languages & Frameworks -> PHP -> Debug -> Port should be 9000 (Can accept external connections)</li>
<li>Preferences -> Languages & Frameworks -> PHP -> Debug -> DBGp Proxy ->should also be 9000</li>
</ul>

![image tooltip here](/assets/xdebug2.jpg)
![image tooltip here](/assets/xdebug3.jpg)
<p>
For ordinary php files, this is pretty enough. But for magento, we have to setup the server.. (maybe it's because it's so big)
</p>

<ul>
<li>Preferences -> Languages & Frameworks -> PHP -> Server -> Set Server (but not mapping)</li>
<li>add Configuration in Debugger, start debugger</li>
</ul>
<p>
In my case, there was some odd errorly things as php-cs-fixer is having errors a lot, and I have disabled it.
Maybe I will update more about this in the future. And also not sure why 9001 does not work also.
Will have to dig in more.
</p>
{% include disqus2.html %}
