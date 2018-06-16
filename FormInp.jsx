import React from 'react';

class FormInp extends React.Component{
	constructor(props){
		super(props);
		this.state={data:'Utsav will update the data'}
	this.updateData=this.updateData.bind(this);
};
updateData(e){
	this.setState({data:e.target.value});
}
render(){
	return(
	<div>
	<Content myDataProp={this.state.data} updateDataProp={this.updateData} />
	</div>
	);
}
}

class Content extends React.Component{
	render(){
		return(
		<div>
		<input type="text" value={this.props.myDataProp} onChange={this.props.updateDataProp} />
		<h3> {this.props.myDataProp}</h3>
		</div>
		);
	}
}
export default FormInp;