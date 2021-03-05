import categories from '../../mocks/categories';
import pets from '../../mocks/pets';

import * as Types from './types';

export const getAll = (): Types.CategoriesReturn[] => categories;

export const getOne = (category: Types.Category): Types.CategoryReturn => {
  console.log('category: ', category);
  return pets.filter((pet) => pet.petType === category);
};
