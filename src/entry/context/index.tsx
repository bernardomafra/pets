import React from 'react';

import * as Types from './types';

export const AppContext = React.createContext<Types.AppContextProps>({
  changePageFunction: (petId) => console.log(petId),
  setChangePageFunction: () => {},
});

const AppProvider = ({children}: Types.AppProviderProps) => {
  const [
    changePageFunction,
    setChangePageFunction,
  ] = React.useState<Types.ViewPetFunctionType>(() => {});

  return (
    <AppContext.Provider
      value={{
        changePageFunction,
        setChangePageFunction,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
