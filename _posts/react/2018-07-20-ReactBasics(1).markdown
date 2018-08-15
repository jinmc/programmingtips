---

layout: post
comments: true
title:  "React Basics(1)"
date:   2018-07-20
tags: [news, getting_started]
categories: react

---

Reference : programming for the web (Edx)

{% highlight javascript %}

var HelloComponent = React.createClass ({
 render : function() {
   return (
      <h1>Hello, React!</h1>
	);
  }
});

ReactDOM.render(
	<HelloComponent />
	document.getElementById('container');
);

{% endhighlight %}


Same code in ES6 (more newer syntax)
considered better because it lets you to extend and 
make a class. 
{% highlight javascript %}

class HelloComponent extends React.Comonent {
	render() {
		return (
			<h1>Hello, React!</h1>
		);
	}

}

ReactDOM.render(
	<HelloComponent />
	document.getElementById('container');
);

{% endhighlight %}

Also, render is the function which is called to 


There are two things to keep in mind, are properties and state.<br>
Properties => attributes and values that are set when the component is created, and it should not be modified after initialization.
<br><br>
State => attributes and values that represent the current state of the component, based on what it does/represents
and it can be modified during the component's lifecycle
<br><br>
Example of using props : 

{% highlight javascript %}

ReactDOM.render(
	<HelloUser name="Maria" />,
	document.getElementById('container')
);

class HelloUser extends React.Component {
	render() {
		return (
			<h1>Hello {this.props.name}!!</h1>
		);
	}
}

{% endhighlight %}


{% include disqus2.html %}