import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View``;

export const Photo = styled.Image``;

export const LeftSide = styled.View`
  width: 60%;
`;

export const RightSide = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100px;
  border: 1px solid red;
  width: 70%;
  margin-left: -30px;
`;

export const Title = styled.Text``;
export const Age = styled.Text``;
export const Subtitle = styled.Text``;
