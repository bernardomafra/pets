import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => [
      {label: 'All', key: 'all'},
      {label: 'Cat', key: 'cat'},
      {label: 'Dog', key: 'dog'},
      {label: 'Bird', key: 'bird'},
    ]);
  },
});
