import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import Stateless from './Stateless.jsx';
import Stateful from './Stateful.jsx';
import UsingProps from './UsingProps.jsx';
import PropsAndStates from './PropsAndStates.jsx';
import PropValid from './PropValid.jsx';
import SetState from './SetState.jsx';
import DomUpdate from './DomUpdate.jsx';
import Toggle from './Toggle.jsx';
import FormInp from './FormInp.jsx';
import UpdateOnClick from './UpdateOnClick.jsx';
import Ref from './Ref.jsx';
import Keys from './Keys.jsx';
import Routing from './Routing.jsx';
import CSStrans1 from './CSStrans1.jsx';
import Game from './Game.jsx';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Stateless />, document.getElementById('app1'));
ReactDOM.render(<Stateful />, document.getElementById('app2'));
ReactDOM.render(<UsingProps headerProp = "Header from props..." contentProp = "Content
   from props..." />, document.getElementById('app3'));
ReactDOM.render(<PropsAndStates />, document.getElementById('app4')); 
ReactDOM.render(<PropValid />, document.getElementById('app5')); 
ReactDOM.render(<SetState />, document.getElementById('app6')); 
ReactDOM.render(<DomUpdate />, document.getElementById('app7')); 
ReactDOM.render(<Toggle />, document.getElementById('app8'));
ReactDOM.render(<FormInp />, document.getElementById('app10'));
ReactDOM.render(<UpdateOnClick />, document.getElementById('app11'));
ReactDOM.render(<Ref />, document.getElementById('app12'));
ReactDOM.render(<Keys />, document.getElementById('app13'));
ReactDOM.render(<Routing />, document.getElementById('app14'));
ReactDOM.render(<CSStrans1 />, document.getElementById('app15'));
ReactDOM.render(<Game />, document.getElementById('app16'));

  export default UsingProps;
