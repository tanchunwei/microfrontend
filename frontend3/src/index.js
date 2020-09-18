import React from 'react';
import ReactDOM from 'react-dom';
import WordTree from "./js/components/WordTree";

window.renderFrontend3 = (containerId, history) => {
  ReactDOM.render(
    <WordTree />,
    document.getElementById(containerId),
  );
};

window.unmountFrontend3 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};