import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => [
      {label: 'All', name: 'all'},
      {label: 'Cat', name: 'cat'},
      {label: 'Dog', name: 'dog'},
      {label: 'Bird', name: 'bird'},
    ]);
  },
});
