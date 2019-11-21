import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.scss';

ReactDOM.render(
  <Provider store={createStore(() => {})}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
