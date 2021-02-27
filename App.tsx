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
import {Text} from 'react-native';

import {Container} from './global-styles';
import CustomStatusBar from './src/components/status-bar';

const App = () => {
  return (
    <>
      <CustomStatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Container>
        <Text>teste</Text>
      </Container>
    </>
  );
};

export default App;
