const getAll = () => {
  return fetch('/api/categories')
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log('Error while fetch categories: ', err));
};

export default {
  getAll,
};
