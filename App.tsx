/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import * as Styles from './global-styles';
import CustomStatusBar from './src/components/status-bar';
import Header from './src/components/header';
import Body from './src/components/body';

import './mock-server';

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
