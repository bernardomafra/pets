import React from 'react';
import {View, StatusBar, StatusBarProps} from 'react-native';
import styles from './styles';

const CustomStatusBar = ({backgroundColor, ...props}: StatusBarProps) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default CustomStatusBar;
