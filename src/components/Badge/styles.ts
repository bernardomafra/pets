import styled from 'styled-components/native';
import {BadgeStyleProps} from './types';

export const Badge = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 84px;

  background: ${(props: BadgeStyleProps) =>
    props.selected ? '#F57B51' : 'rgba(196, 196, 196, 0.15)'};
  border-radius: 10px;
`;

export const BadgeText = styled.Text`
  color: ${(props: BadgeStyleProps) => (props.selected ? '#FFF' : '#777777')};
`;
