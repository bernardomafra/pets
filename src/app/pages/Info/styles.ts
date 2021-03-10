import styled from 'styled-components/native';
import * as Types from './types';
import {Badge} from '../../components/Badge/styles';

export const Photo = styled.Image`
  width: 100%;
  height: 340px;
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

export const AvatarWrapper = styled.View`
  padding: 24px 0px;
`;

export const PetTraitsText = styled.Text`
  font-family: 'MontserratAlternates-Medium';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #555555;
`;

export const PetTrait = styled.View`
  margin: 2px;
`;

export const PetTraitsWrapper = styled.View`
  padding: 20px 0px;
  /* width: 80%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: flex-start;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  line-height: 16px;
  font-weight: normal;
  color: #555555;

  margin-bottom: 16px;
`;

export const LikeButton = styled.TouchableOpacity`
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  width: 58px;
  align-self: flex-start;

  background-color: #ffffff;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 30px;
`;
