import React from 'react';
import ReactDOM from 'react-dom';
 import PropTypes from 'prop-types';
 
class Toggle extends React.Component {
constructor() {
    super();
    this.state = {
      switched: true,
    }
	this.DomNode=this.DomNode.bind(this);

  }
 
  
 DomNode(){
	 this.setState({switched:!this.state.switched});
	var div=document.getElementById('myID');
if(this.state.switched){
ReactDOM.findDOMNode(div).style.color="green";
			ReactDOM.findDOMNode(div).style.textDecoration="underline";
			ReactDOM.findDOMNode(div).style.fontFamily="Helvetica";
			ReactDOM.findDOMNode(div).style.fontSize="25px";}

else{
ReactDOM.findDOMNode(div).style.color="black";
			ReactDOM.findDOMNode(div).style.textDecoration="none";
			ReactDOM.findDOMNode(div).style.fontFamily="Arial";
			ReactDOM.findDOMNode(div).style.fontSize="14px";}
}
  render() {
    return (
        <div>
          <button onClick={this.DomNode} >button</button>
		  <div id="myID"  >Utsav {this.state.switched ? "true":"false"} </div>
        </div>
    );
  }
}
export default Toggle;