---

layout: post
comments: true
title:  "React Basics - component interaction example"
date:   2018-08-15
categories: react

---

Reference : programming for the web (Edx)

This is the code from Edx, PennX, Chris Murphy. 
In this code, we will see component interaction, 
and also see functional programming in javascript.

{% highlight html %}
<body>
<div id='container'></div>
<script type="text/jsx">
class FilteredList extends React.Component {
  constructor(props) {
    super(props);
	var allItems = {"Anteater", "Bear", "Cat", "Dog", "Elephant" };
	this.state = { initialItems: allItems,
						   currentItems: allItems}
  }
  
  filterList(input) { // callback function
    var updateList = this.state.initialItems;
	
	updatedList = updatedList.filter(function(item) {
	                             return item.search(input.target.value) !== -1;
	                         });
    this.setState( { currentItems: updatedList } );
  
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
	      onClick={ this.incrementCount.bind(this); } >
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

{% include disqus2.html %}