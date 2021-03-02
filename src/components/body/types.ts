import React from 'react';
import {SvgProps} from 'react-native-svg';

export type Category = {
  label: string;
  key: string;
  icon?: React.FC<SvgProps>;
};
