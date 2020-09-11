import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './serviceWorker';

window.renderFrontend2 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountFrontend2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
