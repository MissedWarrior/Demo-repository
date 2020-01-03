import {Routes} from './types';

import Index from '@pages/Index/Index';

export const routes: Routes[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  // {
  //   path: '/legals',
  //   name: 'Legals',
  //   loadComponent: () => import('@pages/LegalList/LegalList'),
  //   children: [
  //     {
  //       path: '/:id',
  //       name: 'Detail',
  //       loadComponent: () => import('@pages/Detail/Detail'),
  //     },
  //   ],
  // },
  // {
  //   path: '/404',
  //   name: 'Not found',
  //   loadComponent: () => import('@pages/NotFound/NotFound'),
  // },
];


// const routes: Pages[] = [
//   {
//     path: '/',
//     component: Index,
//   },
//   {
//     path: '/login',
//     component: Login,
//     isNotAvailableAfterLogin: true,
//   },
//   {
//     path: '/legal-list/:id',
//     component: Detail,
//     requireAuth: true,
//   },
//   {
//     path: '/legal-list',
//     component: LegalList,
//     requireAuth: true,
//   },
// ];

// export {routes};
