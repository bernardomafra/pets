import styled from 'styled-components/native';
import * as Types from './types';

export const Avatar = styled.View`
  display: flex;
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

export const NoPhoto = styled.View`
  border-radius: 50px;
  margin-right: 16px;
  width: 48px;
  height: 48px;
  background-color: #f57b51;
`;
