import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import GuardedRoute from '@components/Router/GuardedRoute';
import {routes} from './routes';
import NotFound from '@pages/NotFound/NotFound';
import {useSelector} from 'react-redux';
import {rootReducerType} from '@store/index';

import './App.scss';

const App: React.FC = () => {

  const {user} = useSelector((state: rootReducerType) => state);

  return (
    <Switch>
      {routes.map((page, index) => {
        if (user.isLoggedIn && page.isNotAvailableAfterLogin) {
          return <Redirect key={index} to={'/'} />
        }

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
