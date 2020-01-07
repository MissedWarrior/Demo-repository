import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

import {routes} from './routes';
import {asyncComponentLoader} from './middleware';

export const router = _createRouter();

function _createRouter() {
  const router = createRouter(routes);

  router.usePlugin(browserPlugin({
    useHash: false
  }));

  router.useMiddleware(asyncComponentLoader(routes));

  return router;
}
