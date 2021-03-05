import {createServer} from 'miragejs';

import {CategoriesRoutes, PetsRoutes} from './routes';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => CategoriesRoutes.getAllTypes());

    this.get(
      '/api/pets/category/:category',
      (_, req) => PetsRoutes.getByCategory(req.params.category),
      {
        timing: 1000,
      },
    );

    this.get(
      '/api/pets/name/:name',
      (_, req) => PetsRoutes.getByName(req.params.name),
      {
        timing: 1000,
      },
    );
  },
});
