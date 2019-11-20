import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';

import './App.scss';


const App: React.FC = () => {
  return (
    <Switch>
      <Route component={Index} path={'/'} exact/>
      <Route component={NotFound} path={'*'}/>
    </Switch>
  );
};

export default App;
