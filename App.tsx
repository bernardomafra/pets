import 'react-native-gesture-handler';
import React from 'react';

import AppProvider from './src/entry/context';
import './src/infra/api/server';

import Routes from './src/entry/routes';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
