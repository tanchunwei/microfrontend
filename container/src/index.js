import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppError from './error/AppError'
import * as serviceWorker from './registerServiceWorker';
import { unregister } from './serviceWorker';

window.renderMicroFrontendError = (containerId, history) => {
  ReactDOM.render(
    <AppError history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountMicroFrontendError = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
