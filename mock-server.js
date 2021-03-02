import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/categories', () => [
      {label: 'All', petType: 'all'},
      {label: 'Cat', petType: 'cat'},
      {label: 'Dog', petType: 'dog'},
      {label: 'Bird', petType: 'bird'},
    ]);
  },
});
