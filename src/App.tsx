import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GuardedRoute from '@components/Router/GuardedRoute';
import {routes} from './routes';
import NotFound from '@pages/NotFound/NotFound';

import './App.scss';

const App: React.FC = () => {
  return (
    <Switch>
      {routes.map((page, index) => {
        // TODO: add redirect from "isNotAvailableAfterLogin" pages

        if (page.requireAuth) {
          return <GuardedRoute key={index} component={page.component} path={page.path}/>
        }

        return <Route key={index} component={page.component} path={page.path} exact/>
      })}
      <Route component={NotFound} path='*'/>
    </Switch>
  );
};

export default App;
