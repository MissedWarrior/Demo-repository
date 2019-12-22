import React from 'react';
import ReactDOM from 'react-dom';
import {RouterProvider} from 'react-router5';
import {Provider} from 'react-redux';

import App from './App';
import {router} from './router';
import store from './store';

import './index.scss';


ReactDOM.render(
  <Provider store={store}>
    <RouterProvider
      router={router}>
      <App/>
    </RouterProvider>
  </Provider>,
  document.getElementById('app'));
