import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import Index from '@pages/Index/Index';
import Detail from '@pages/Detail/Detail';
import Login from '@pages/auth/Login/Login';
import LegalList from '@pages/LegalList/LegalList';

export type Pages = {
  path: string,
  component: React.ComponentType<RouteComponentProps<any>>|React.ComponentType<any>,
  requireAuth?: boolean,
  isNotAvailableAfterLogin?: boolean,
  title?: string,
}

const routes: Pages[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    component: Login,
    isNotAvailableAfterLogin: true,
  },
  {
    path: '/legal-list/:id',
    component: Detail,
    requireAuth: true,
  },
  {
    path: '/legal-list',
    component: LegalList,
    requireAuth: true,
  },
];

export {routes};
