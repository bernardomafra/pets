import React from 'react';

import * as Styles from './styles';
import * as GlobalStyles from '../../../../global-styles';

import AppProvider from '../../../entry/context';

import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Home = () => {
  return (
    <AppProvider>
      <Styles.Screen>
        <CustomStatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <GlobalStyles.Container>
          <Header />
          <Body />
        </GlobalStyles.Container>
      </Styles.Screen>
    </AppProvider>
  );
};

export default Home;
