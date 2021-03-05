import {createServer} from 'miragejs';

import {CategoriesRoutes, PetsRoutes} from './routes';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => CategoriesRoutes.getAllTypes());

    this.get(
      '/api/categories/:category',
      (_, req) => PetsRoutes.getByCategory(req.params.category),
      {
        timing: 1000,
      },
    );
  },
});
