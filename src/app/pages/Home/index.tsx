import React from 'react';

import * as Styles from './styles';
import * as GlobalStyles from '../../../../global-styles';

import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import Body from '../../components/Body';
import {AppContext} from '../../../entry/context';

const Home = () => {
  const {customStatusBarColor} = React.useContext(AppContext);

  return (
    <Styles.Screen>
      <CustomStatusBar
        backgroundColor={customStatusBarColor}
        barStyle="dark-content"
      />
      <GlobalStyles.Container>
        <Header />
        <Body />
      </GlobalStyles.Container>
    </Styles.Screen>
  );
};

export default Home;
