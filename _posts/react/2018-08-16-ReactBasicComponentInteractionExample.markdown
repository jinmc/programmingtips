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
  

  
  render() { // invoked when setState is called
    return (
      <div><input type="text" placeholder="Search" onChange={this.filterList.bind(this) }/>
	            <ListItems items= { this.state.currentItems } />
	  </div>
	);
  }
};

class ListItems extends React.Component {
  render() {
    return(
	  <ul> {  this.props.items.map(function(item) {
	              return <li key={item}> {item}</li> 
					  } ) 
		 }
	  </ul>
	)	
  }
}

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('container')
);
</script>
</body>
{% endhighlight %}

<i>https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f</i><br>
<i>https://stackoverflow.com/questions/43904825/what-do-curly-braces-mean-in-jsx-react</i><br><br>

Some helpful posts to grasp the jsx syntax more...

I don't know how to format this.. 
in Jekyll it looks so stupid, not indented correctly whatever I do..

Anyway, this seems like a disaster who doesn't know javascript, because this has so many things going on.

{% include disqus2.html %}
