import React from 'react';

import * as Styles from './styles';

import AppProvider from '../../../entry/context';

import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Home = () => {
  return (
    <AppProvider>
      <Styles.Screen>
        <CustomStatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <Styles.Container>
          <Header />
          <Body />
        </Styles.Container>
      </Styles.Screen>
    </AppProvider>
  );
};

export default Home;
