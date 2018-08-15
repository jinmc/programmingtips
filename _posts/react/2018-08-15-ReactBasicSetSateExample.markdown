---

layout: post
comments: true
title:  "React Basics - setState example by counter"
date:   2018-08-15
categories: react

---

Reference : programming for the web (Edx)

This is the code from Edx, PennX, Chris Murphy. 
It's really basic, just setting the setState function

{% highlight javascript %}
<body>
<div id='container'></div>
<script type="text/jsx">
class Counter extends React.Component {
  constructor(props) {
    super(props);
	this.state = {count: 0 };
  }
  
  incrementCount() { // callback function
    this.setState( { 
	  count: this.state.count + 1;
	});
  }
  
  render() { // invoked when setState is called
    return (
	  <div> Count: { this.state.count}
	  <button type="button"
	      onClick={ this.incrementCount.binde(this); } >
		  Increment
	  </button>
	  <div>
	);
  }
};

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('container')
);
</script>
</body>
{% endhighlight %}

At first, this was real hard for me, so let's go step by step.
Firstly, the constructor. I found a really good post for this subject,
which is this : <br> <i>http://cheng.logdown.com/posts/2016/03/26/683329</i>
<br><br>
What it basically says is that if you're not not setting a constructor,
you don't have to call super, it would be automatically made.
But if you are calling the constructor, you have to call super.
This is because <b>this</b> is unintialized if super() is not called.
Also, you can actually omit props if you don't use properties but you should 
include properties if you use it. Actually, I tried the above code withut props 
and it works just fine.
<br><br>
It is also quite important to point out that inside ReactDOM.render, 
it's important to keep the elements inside the div, so that it becomes one element.
If it becomes two, you should make a big div to cover them all.
<br><br>
Most important of all, is that you should use <b>this.state</b> only inside the constructor,
and you should use <b>this.setState()</b> elsewhere,
because the setState function will call the <b>render()</b> function and using <b>this.state</b> will not.
<br><br>
Also, there is another reason.. if there are two components which are the same class, 
and if the state gets updated in one component it will automatically update the other.. 
something like a static variable, I guess ... this is how I understand it, but I may be wrong.
<br><br>
<i>https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b</i>
 this is a post about setState and it's quite complicated. 
{% include disqus2.html %}