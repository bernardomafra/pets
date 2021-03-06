import React from 'react';

export type AppProviderProps = {
  children: React.ReactChild;
};

export type ViewPetFunctionType = (petId: string) => void | undefined;

export type AppContextProps = {
  changePageFunction: ViewPetFunctionType;
  setChangePageFunction: Function;
};
