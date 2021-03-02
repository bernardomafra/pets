import React from 'react';
import {SvgProps} from 'react-native-svg';

export type Category = {
  label: string;
  name: string;
  icon?: React.FC<SvgProps>;
};
