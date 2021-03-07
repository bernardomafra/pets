import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import * as GlobalStyles from '../../../../global-styles';

import * as Types from './types';
import Card from '../../components/Card';

// import * as Styles from './styles';

const Info = ({route}: Types.InfoPageProps) => {
  React.useEffect(() => {
    console.log(route.params);
  }, [route]);

  return (
    <GlobalStyles.Container>
      <View style={sheet.container}>
        <Image
          style={sheet.image}
          source={require('../../assets/big-buddy.png')}
        />
        <Card
          id={route.params.petId}
          photoSource={undefined}
          petType={'dog'}
          title={'Buddy'}
          subtitle={'Shiba Inu'}
          age={'1 Year old'}
          gender={'boy'}
        />
        <Text>{route.params.petId}</Text>
      </View>
    </GlobalStyles.Container>
  );
};

const sheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {},
});

export default Info;
