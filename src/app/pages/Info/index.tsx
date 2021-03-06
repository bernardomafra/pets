import React from 'react';
import {Text} from 'react-native';

// import * as Styles from './styles';

const Info = ({_, route}) => {
  return <Text>{route.params.petId}</Text>;
};

export default Info;
