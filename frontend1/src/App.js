import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home';
const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  //<Router history={this.props.history || defaultHistory}>
  <Router history={defaultHistory}>
    <Home />
  </Router>
);

export default App;