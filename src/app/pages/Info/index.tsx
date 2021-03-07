import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import * as Types from './types';
import Card from '../../components/Card';

// import * as Styles from './styles';

const Info = ({route}: Types.InfoPageProps) => {
  React.useEffect(() => {
    console.log(route.params);
  }, [route]);

  return (
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
  );
};

const sheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    height: 375,
    width: '100%',
  },
});

export default Info;
