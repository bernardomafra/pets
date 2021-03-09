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

export const Avatar = styled.View`
  margin-top: 24px;
  display: flex;
  /* flex-direction: row; */
`;

export const AvatarRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: Types.AvatarStyleRowProps) =>
    props.justify || 'flex-start'};

  width: 100%;
`;

export const AvatarColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const AvatarText = styled.Text`
  font-family: 'MontserratAlternates-Medium';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  color: #555555;
`;
export const AvatarDate = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #c4c4c4;
`;
export const AvatarSubtitle = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #c4c4c4;

  margin-top: 4px;
`;

export const AvatarImage = styled.Image`
  border-radius: 50px;
  margin-right: 16px;
  width: 48px;
  height: 48px;
`;
