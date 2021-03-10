import styled from 'styled-components/native';
import * as Types from './types';
import {StyleSheet} from 'react-native';

export const Container = styled.SafeAreaView`
  padding: 0px 19px;
  flex: 1;

  background-color: ${(props: Types.GlobalStylesContainerProps) =>
    props.backgroundColor || '#FFF'};
`;

export const GlobalSheet = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 7.13,
    shadowRadius: 2.62,
    elevation: 1,
  },
});
