import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FrontendError from './FrontendError';
const defaultHistory = createBrowserHistory();

const AppError = ({ history = defaultHistory, name = "" }) => (
  //<Router history={this.props.history || defaultHistory}>
  <Router history={defaultHistory}>
    <FrontendError name={name}/>
  </Router>
);

export default AppError;