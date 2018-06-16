import React from 'react';
import ReactDOM from 'react-dom';
class SetState extends React.Component{
	constructor(){
		super();
		this.state={
		data:[]
		}
		
		this.setStateHandle=this.setStateHandle.bind(this);
		this.setStateHandle1=this.setStateHandle1.bind(this);
	}
	setStateHandle(){
		var item="hello Utsav"
		var myArray=this.state.data.slice();
		myArray.push(item);
		this.setState({data:myArray});
	}
	setStateHandle1(){
		var myArray=this.state.data.slice();
		myArray.pop();
		this.setState({data:myArray});
	}
	render(){
		return(
		<div>
	<button onClick={this.setStateHandle}> setstate</button>

	<button onClick={this.setStateHandle1}>deletestate</button>
		<h4>State array:{this.state.data}</h4>
	</div>
	);
	}
}
export default SetState;
		