import React from 'react';
import ReactDOM from 'react-dom';
import WordCloud from "./js/components/WordCloud";

window.renderFrontend3 = (containerId, history) => {
  ReactDOM.render(
    <WordCloud />,
    document.getElementById(containerId),
  );
};

window.unmountFrontend3 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};