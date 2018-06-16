import React from 'react';

class UpdateOnClick extends React.Component{
constructor(props){
super(props);
this.state={
data:'This is the initial data'
}
this.updateHandler=this.updateHandler.bind(this);
};
updateHandler(){
	this.setState({data:'Data is updated'});
}
render()
{
	return(
	<div>
	<Content myDataProp={this.state.data} updateHandlerProp={this.updateHandler} />
	</div>
	);
}
}
class Content extends React.Component{
	render(){
		return(
		<div>
		<button onClick={this.props.updateHandlerProp}>update</button>
		<h3>{this.props.myDataProp}</h3>
		</div>
		);
	}
}
export default UpdateOnClick;
	