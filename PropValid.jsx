import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class PropValid extends React.Component{
	render(){
		return(
		<div>
		<h1>hello, {this.props.name}</h1>
		<h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
			
		</div>
		);
	}
}
PropValid.PropTypes = {
   name: PropTypes.string,
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string
};
PropValid.defaultProps = {
   name: 'Utsav Khandelwal',
   propArray: [1, 2, 3, 4, 5],
   propBool: true,
   propFunc: function(e) {
      return e
   },
   propNumber: 1,
   propString: "String value..."
}
export default PropValid;