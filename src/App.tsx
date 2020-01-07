import React, {FC} from 'react';
import {useRouteNode} from 'react-router5';

import NotFound from '@pages/NotFound/NotFound';

import {getRoute} from './router/middleware';
import {routes} from './router/routes';

import './App.scss';

const App: FC = () => {
  const router = useRouteNode('');
  const route = getRoute(router.route.name, routes);

  console.log(route);

  if (!route || !route.component) return (<NotFound/>);

  const Component = route.component;
  return (<Component/>);
};

export default App;
