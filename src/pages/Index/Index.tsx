import React from 'react';
import {Link} from "react-router-dom";

import logo from "../../logo.svg";

const Index: React.FC = () => {
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
          Learn React
        </span>
      </div>
    </div>
  );
};

export default Index;
