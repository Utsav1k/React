import React from 'react';
import ReactDOM from 'react-dom';
class Stateless extends React.Component
{
	render(){
		return (
		<div>
		  <Header />
		  <Content />
		  </div>
		  );
	}
}

class Header extends React.Component
{
	render(){
		return (
		<div>
		<h1> Header</h1>
		
		</div>
		);
	}
}

class Content extends React.Component
{
	render(){
		return (
		<div>
		<h2> Content</h2>
		<p> this is an example of stateless from utsav</p>
		</div>
		);
	}
}
export default Stateless;
		  