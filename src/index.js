import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './styles/salesforce-lightning-design-system.min.css'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
