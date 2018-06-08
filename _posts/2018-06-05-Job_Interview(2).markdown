---
published: false
layout: post
comments: true
title:  "Interview preparation... (2) experience"
date:   2018-06-05
categories: jekyll update
---

People who talk to me for the first time are often amazed that I came to the US
4 years ago because my english seems fluent. 

It is to some extent true that I don't have a strong korean accent than most Koreans.
Even some Koreans who came to US in their middle school or even elementary school 
has Korean accents, but people often ask me if I grew up in US.

But my english goes through such hardship when talking through difficult stuff.
Like deep conversation, or.. well, I might say that I am generally not good at talking even in Korean,
my most comfortable mother tongue, and it would be natural to say I'm not good in english to talk fluently like native americans.

The reason I talked about this is that I think I have disadvantages about this when going through a phone interview,
the interviewer would just pick up my voice and think that I am as good as a native american but would gradually 
get disappointed because of my lack of vocabulary and the mumbling.. 

Anyway, I got this opportunity with company 'G' 
(Won't say more.. srry) and it was a good experience.
The interviewer first asked me what I did in my current company,
and to my surprise, I was so aweful at this basic question. 
I listened to myself for the recorded phone call and it was terrible...

Anyways, after that, it was the actual coding interview.
I used codepad, which was a coding platform I haven't used, but quite straightforward.
Also, it had nice intellisense with output window, so that I could try and test test cases on my own.



So! the problem was this : 

Try to find the longest identical substring inside the string and also the start and last index of it.
So, for example,  if the input string is aabbb, you would return 2, 4 for it because bbb is the longest identical substring(character array)

First, I didn't catch the question and had to ask several times about it.
And then, I tried to talk about how I was going to implement the algorithm, 
but was getting problem talking about it, so I just went right into the code,
which was the problem. I should have endure the temptation and explain it first, 
at least not if writing aobut it, and then jump into the code.

Actually, I'm gonna do that right now.

How I'll gonna solve this is to iterate through a for loop.
Also, I'll use a buffer to store the previous character.
iterating the string through one character at the time, 
and compare the string with the buffer(which would be the previous character)
So, let's say we have five characters.
First, we will store the first element in the buffer.
And then set startIndex and lastIndex to 0.
and then, we will start looping from the second element.
When second element, we compare it with the buffer.
and here, we should have longestSubString variable,
and also we should have tempLongestSubstring variable
just to be sure that the tempLonestSusbString is bigger
If the 



I was not able to solve it cleanly,
and the interviewer helped me out a lot.
I have nothing to say if they failed me, 
but to make sure 

{% if page.comments %} 
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-jinmc-github-io-programmingtips.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            

 {% endif %}
