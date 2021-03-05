const getByCategory = (categoryName: string) => {
  return fetch(`/api/pets/category/${categoryName}`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log('Error while fetch category: ', err));
};

const getByName = (categoryName: string) => {
  return fetch(`/api/pets/name/${categoryName}`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log('Error while fetch category: ', err));
};

export default {
  getByCategory,
  getByName,
};
