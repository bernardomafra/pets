import React from 'react';
import {Text} from 'react-native';

import * as Types from './types';

// import * as Styles from './styles';

const Info = ({route}: Types.InfoPageProps) => {
  return <Text>{route.params.petId}</Text>;
};

export default Info;
