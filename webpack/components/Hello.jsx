import React, { Component } from 'react';
class Hello extends Component {
  constructor(props) {
    super(props);
	this.state = { myString: "Click Me!!"}
  }

  clickMe(e) {

  	this.setState({ myString: "This is React Component" });
  }

 render() {
 	var str = this.state.myString;
	 return (
 	<div onClick={ this.clickMe.bind(this) }> { str } </div>
 	)
 	}
}
export default Hello;