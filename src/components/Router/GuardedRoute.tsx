import React from 'react';
import {useSelector} from 'react-redux';
import {rootReducerType} from '@store/index';
import {Redirect, RouteProps, Route} from 'react-router-dom';

const GuardedRoute: React.FC<RouteProps> = (props) => {

  const {user} = useSelector((state: rootReducerType) => state);

  if (user.isLoggedIn) {
    return (
      <Route component={props.component} path={props.path} exact/>
    );
  }

  return <Redirect to={'login'}/>
};

export default GuardedRoute;
