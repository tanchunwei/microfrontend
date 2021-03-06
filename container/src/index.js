import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import AppError from './error/AppError'
import * as serviceWorker from './registerServiceWorker';
import { unregister } from './serviceWorker';

window.renderMicroFrontendError = (containerId, history, name) => {
  ReactDOM.render(
    <AppError history={history} name = {name} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountMicroFrontendError = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
