import React from 'react';

import Index from '@pages/Index/Index';
import Detail from '@pages/Detail/Detail';
import Login from '@pages/auth/Login/Login';

export type Pages = {
  path: string,
  component: React.FC,
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
    path: '/detail',
    component: Detail,
    requireAuth: true,
  },
];

export {routes};
