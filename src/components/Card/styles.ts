import styled from 'styled-components/native';

import * as Types from './types';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid green; */
  margin-top: 21px;
  border-radius: 24px;
  height: 120px;
  background-color: #fff;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: ${(props: Types.CardStyleRowProps) => props.align || 'center'};
  justify-content: ${(props: Types.CardStyleRowProps) =>
    props.justify || 'space-between'};
  border: 1px solid yellow;
  margin: 0px 16px;
  width: ${(props: Types.CardStyleRowProps) =>
    props.width ? `${props.width}px` : 'auto'};
`;

export const Photo = styled.Image``;

export const LeftSide = styled.View`
  width: 50%;
`;

export const Footer = styled.View``;

export const RightSide = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid red;

  padding: 10px 0px;

  height: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  color: #555555;
  font-family: Montserrat Alternates;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;

  letter-spacing: 0.15px;
`;
export const Age = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  letter-spacing: 0.4px;
`;

export const Subtitle = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  letter-spacing: 0.4px;
  color: #c4c4c4;
`;

export const Dot = styled.View`
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50px;
  margin: 0px 8px;
`;

export const Gender = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: ${(props: Types.CardStyleGenderProps) => props.color || '#C4C4C4'};
`;
