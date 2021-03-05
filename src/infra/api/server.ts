import {createServer} from 'miragejs';

import * as Routes from './routes';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => Routes.getAll());

    this.get(
      '/api/categories/:category',
      (_, req) => Routes.getOne(req.params.category),
      {
        timing: 1000,
      },
    );
  },
});
