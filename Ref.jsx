import React from 'react';
import ReactDOM from 'react-dom';

class Ref extends React.Component{
	constructor(){
		super();
		this.state={
			data:''
		}
		this.myInput=this.myInput.bind(this);
		this.clearInput=this.clearInput.bind(this);
	};
	myInput(e){
		this.setState({data:e.target.value});
	}
	clearInput(){
		var myDiv=document.getElementById('myDiv');
		this.setState({data:''});
		ReactDOM.findDOMNode(this.refs.myInp).focus();
		ReactDOM.findDOMNode(myDiv).hide();
	}

	render(){
		return(
		<div>
		<input value={this.state.data} onChange={this.myInput} ref="myInp" />
		<button id="myDiv" onClick={this.clearInput} >Clear  </button>
		<h3> {this.state.data}</h3>
		</div>
		);
	}
}
export default Ref;