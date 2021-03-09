import styled from 'styled-components/native';
import * as Types from './types';

export const Photo = styled.Image`
  width: 100%;
  height: 375px;
  background-color: ${({backgroundColor}: Types.InfoStylePhotoProps) =>
    backgroundColor};

  position: relative;
`;

export const CardContainer = styled.View`
  margin-top: -50px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 16px;
  top: 68px;

  background-color: #fff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;
