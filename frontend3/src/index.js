import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/reducers'
import WordCloud from "./js/components/WordCloud";

const store = createStore(rootReducer)

window.renderFrontend3 = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
        <WordCloud />
    </Provider>,
    document.getElementById(containerId),
  );
};

window.unmountFrontend3 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};