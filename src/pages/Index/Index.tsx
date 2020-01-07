import React from 'react';
import {Link} from 'react-router5';
import {useSelector} from 'react-redux';

import {rootReducerType} from '@store/index';

import logo from '../../logo.svg';

const Index: React.FC = () => {
  const {user} = useSelector((state: rootReducerType) => state);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {user.isLoggedIn ? <Link className={"App-link"} routeName={'Legals'}>Go to Legal List page</Link> :
            <Link className="App-link" routeName={'Login'}>Go to Login page</Link>}
        </div>
        <span
          className="App-link"
        >
          Hello, {user.isLoggedIn ? user.name : 'Guest'}
        </span>
      </div>
    </div>
  );
};

export default Index;
