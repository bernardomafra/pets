import React from 'react';

import * as Types from './types';

export const AppContext = React.createContext<Types.IAppContext>({
  customStatusBarColor: '#FFF',
  setCustomStatusBarColor: () => {},
});

const AppProvider = ({children}: Types.AppProviderProps) => {
  const [
    customStatusBarColor,
    setCustomStatusBarColor,
  ] = React.useState<string>('#FFF');

  return (
    <AppContext.Provider
      value={{
        customStatusBarColor,
        setCustomStatusBarColor,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
