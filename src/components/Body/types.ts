import React from 'react';
import {SvgProps} from 'react-native-svg';

export type Category = {
  label: string;
  petType: string;
  icon?: React.FC<SvgProps>;
};
