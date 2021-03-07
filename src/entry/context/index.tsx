import React from 'react';

import * as Types from './types';

export const AppContext = React.createContext<Types.IAppContext>({
  navigation: undefined,
});

const AppProvider = ({children}: Types.AppProviderProps) => {
  // const reactNavigation = useNavigation<Types.StackProps>();

  return (
    <AppContext.Provider
      value={{
        navigation: undefined,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
