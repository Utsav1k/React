import React from 'react';
import ReactDOM from 'react-dom';

class DomUpdate extends React.Component{
	constructor(){
		super();
		this.findDomNodeHandler=this.findDomNodeHandler.bind(this);
		this.findDomNodeHandler1=this.findDomNodeHandler1.bind(this);
	}
	findDomNodeHandler(){
		var myDiv=document.getElementById('myDiv');
			ReactDOM.findDOMNode(myDiv).style.color="blue";
			ReactDOM.findDOMNode(myDiv).style.textDecoration="underline";
			ReactDOM.findDOMNode(myDiv).style.fontFamily="Helvetica";
			ReactDOM.findDOMNode(myDiv).style.fontSize="25px";
			
	}
	findDomNodeHandler1(){
		var myDiv=document.getElementById('myDiv');
			ReactDOM.findDOMNode(myDiv).style="none";
	}
	render(){
		return(
		<div>
		<button onClick={this.findDomNodeHandler}>domUpdate</button>
		<button onClick={this.findDomNodeHandler1}>domPrevstate</button>
		<div id="myDiv">Utsav is creating this dom update</div>
		</div>
		);
	}
}
export default DomUpdate;
