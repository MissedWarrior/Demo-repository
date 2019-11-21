import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {rootReducerType} from  '@store/index';

import logo from '../../logo.svg';

const Index: React.FC = () => {
  const state = useSelector((state: rootReducerType) => state.user);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Link className="App-link" to={"/login"}>Login</Link>
        </div>
        <span
          className="App-link"
        >
          Hello, {state.name}
        </span>
      </div>
    </div>
  );
};

export default Index;
