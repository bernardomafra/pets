import React from 'react';

import * as Styles from './styles';

import AppProvider from '../../../entry/context';
import {AppContext} from '../../../entry/context';

import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

import * as Types from './types';

const Home = ({navigation}: Types.HomeProps) => {
  const {setChangePageFunction} = React.useContext(AppContext);

  React.useCallback(() => {
    function viewPetInfo(petId: string) {
      navigation.navigate('Info', {petId: petId});
    }

    setChangePageFunction(viewPetInfo);
  }, [navigation, setChangePageFunction]);

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
