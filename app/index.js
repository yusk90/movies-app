import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers';

import configureStore from './store/configureStore';
import './index.less';

/* eslint-disable */
const store = configureStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
/* eslint-disable */

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
