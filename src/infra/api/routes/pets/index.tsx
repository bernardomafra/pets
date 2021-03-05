import pets from '../../mocks/pets';

import * as Types from './types';

export const getAll = (): Types.CategoryReturn => pets;

export const getByCategory = (
  category: Types.Category,
): Types.CategoryReturn => {
  if (category === 'all') {
    return getAll();
  }
  return pets.filter((pet) => pet.petType === category);
};

export const getByName = (name: string): Types.CategoryReturn => {
  return pets.filter((pet) =>
    pet.title.toLowerCase().match(name.toLowerCase()),
  );
};
