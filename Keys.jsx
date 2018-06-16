import React from 'react';
import ReactDOM from 'react-dom';

class Keys extends React.Component{
	constructor(){
		super();
		this.state={
			data:[
			{name:'first...',
			id:1
			},
			{name:'second...',
			id:2
			},
			{name:'third...',
			id:3
			}
			]
		}
	}
	render(){
		return(
		<div>
		<div>{this.state.data.map((dynamicComponent,i)=> <Content key={i} componentData={dynamicComponent} />)}</div>
		</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
		<div>
		<div>{this.props.componentData.name}</div>
		<div>{this.props.componentData.id}</div>
		</div>
		);
	}
}
export default Keys;