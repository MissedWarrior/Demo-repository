import {transitionPath, State} from 'router5';
import { startsWithSegment } from 'router5-helpers';

import {EsModuleComponent, ReactAnyComponent, Routes} from './types'

export function getActivatedRoutes(routes: Routes[], toState: State, fromState: State) {
  const { toActivate } = transitionPath(toState, fromState);
  return toActivate.map(segment => getRoute(segment, routes));
}

export const getRoute = (segment: string, routes: Routes[]): Routes | never => {
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    if (route.name === segment) {
      return route;
    }

    // Segment is child route of current route.
    if (startsWithSegment(segment, route.name) && route.children) {
      const splitSegment = segment.split('.');
      splitSegment.shift();
      if (splitSegment.length > 0) {
        return getRoute(splitSegment.join('.'), route.children);
      }
    }
  }
  throw new Error('route not found');
};

// const asyncComponentLoader = (routes: Routes[]) => () => (toState: State, fromState: State) => {
//   const onActivateHandlers =
//     getActivatedRoutes(routes, toState, fromState)
//       .filter(route => !route.component)
//       .map(route => new Promise((resolve, reject) => {
//         route.loadComponent && route.loadComponent()
//           .then((component: EsModuleComponent | ReactAnyComponent) => {
//
//             const defaultExport = (component as EsModuleComponent).default;
//
//             if (defaultExport) {
//               return Object.assign(route, {component: defaultExport});
//             } else {
//               const keys = Object.keys(component);
//               let importedComponent;
//
//               if(!keys.length) throw new Error('Number of imported components equals 0');
//
//               if (keys.length === 1) {
//                 importedComponent = component[keys[0]];
//               } else {
//                 throw new Error('Multiple import?');
//               }
//
//               return importedComponent;
//             }
//           })
//           .then(resolve)
//           .catch(reject);
//       }));
//   return Promise.all(onActivateHandlers);
// };
