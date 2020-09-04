import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTab from './page/AppTab';
import { unregister } from './serviceWorker';

window.renderFrontend1 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountFrontend1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

window.renderFrontend1Tab = (containerId, history) => {
  ReactDOM.render(
    <AppTab history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountFrontend1Tab = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};