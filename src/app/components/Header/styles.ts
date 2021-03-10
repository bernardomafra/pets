import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-bottom: 28px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PremiumContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;
  padding: 20px;
`;

export const PremiumRow = styled.View`
  display: flex;
  flex-direction: row;

  background-color: rgba(196, 196, 196, 0.15);
  border-radius: 20px;

  position: relative;
`;

export const Select = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 38%;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 25px;
  position: relative;
`;

export const SmallFont = styled.Text`
  font-size: 17px;
  color: #c4c4c4;
  line-height: 20.67px;
  font-family: 'MontserratAlternates-Medium';
`;

export const BigFont = styled.Text`
  font-size: 25px;
  color: #555555;
  font-family: 'MontserratAlternates-Medium';
`;

export const PremiumTitle = styled.Text`
  color: #f57b51;
  font-family: 'MontserratAlternates-Medium';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  max-width: 60%;
`;

export const PremiumDescription = styled.Text`
  margin-top: 8px;
  margin-bottom: 25px;
  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #555555;

  max-width: 70%;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;
