import React from 'react';

import * as Styles from './global-styles';
import CustomStatusBar from './src/components/CustomStatusBar';
import Header from './src/components/Header';
import Body from './src/components/Body';

import './src/infra/api/server';

const App = () => {
  return (
    <Styles.Screen>
      <CustomStatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Styles.Container>
        <Header />
        <Body />
      </Styles.Container>
    </Styles.Screen>
  );
};

export default App;
