import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import TabHome from './TabHome';
const defaultHistory = createBrowserHistory();

const AppTab = ({ history = defaultHistory }) => (
  //<Router history={this.props.history || defaultHistory}>
  <Router history={defaultHistory}>
    <TabHome />
  </Router>
);

export default AppTab;