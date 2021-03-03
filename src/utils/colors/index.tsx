import * as Types from './types';
import {ColorValue} from 'react-native';

export const getCardGenderColorByGender = (gender: string): ColorValue => {
  const map: Types.CardGenderColorsMap = {
    boy: '#0096D1',
    girl: '#F01159',
  };

  return map[gender];
};
