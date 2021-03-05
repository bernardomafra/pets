const getAllCategories = () => {
  return fetch('/api/categories')
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log('Error while fetch categories: ', err));
};

const getCategoryByName = (categoryName: string) => {
  return fetch(`/api/categories/${categoryName}`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log('Error while fetch category: ', err));
};

export default {
  getAllCategories,
  getCategoryByName,
};
