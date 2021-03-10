import styled from 'styled-components/native';

export const SearchBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;

  background-color: #fff;

  border-radius: 20px;
  padding: 30px 15px;

  position: relative;
`;

export const InputBar = styled.TextInput`
  z-index: 1000;

  position: absolute;
  background-color: transparent;
  width: 100%;
  right: 0;
  padding: 20px 20px;

  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16.9576px;
  padding-left: 20px;
  color: #c4c4c4;
`;

export const SearchText = styled.Text`
  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16.9576px;
  padding-left: 10px;
  color: #c4c4c4;
`;

export const Categories = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;
