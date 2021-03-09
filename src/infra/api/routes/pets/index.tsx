import pets from '../../mocks/pets';

import * as Types from './types';

export const getAll = (): Types.PetReturn[] => pets;

export const getByCategory = (category: Types.Category): Types.PetReturn[] => {
  if (category === 'all') {
    return getAll();
  }
  return pets.filter((pet) => pet.petType === category);
};

export const getByName = (name: string): Types.PetReturn[] => {
  return pets.filter((pet) =>
    pet.title.toLowerCase().match(name.toLowerCase()),
  );
};

export const getById = (id: string): Types.PetReturn => {
  return pets.find((pet) => pet.id === +id)!;
};
