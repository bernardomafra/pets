import styled from 'styled-components/native';
import * as Types from './types';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: Types.ButtonStyleContainerProps) =>
    props.backgroundColor || '#f57b51'};
  border-radius: 16px;
  height: ${(props: Types.ButtonStyleContainerProps) =>
    props.size === 'fat' ? '58px' : '44px'};
  width: ${(props: Types.ButtonStyleContainerProps) =>
    props.size === 'fat' ? '270px' : '160px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;
