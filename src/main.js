import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';
import Store from 'store';

import 'normalize-css';


const render = () => {
  ReactDOM.render(
    <App appState={Store.getState()} />
  , document.getElementById('main'));
};

Store.subscribe(render);
render();
