import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
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
`;

export const SmallFont = styled.Text`
  font-size: 17px;
  color: #c4c4c4;
  line-height: 20.67px;
`;

export const BigFont = styled.Text`
  font-size: 25px;
  color: #555555;
  font-weight: 600;
`;

export const PremiumTitle = styled.Text`
  color: #f57b51;
  font-family: Montserrat Alternates;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

export const PremiumDescription = styled.Text`
  margin-top: 8px;
  margin-bottom: 25px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #555555;
`;

export const PremiumButton = styled.TouchableOpacity`
  padding: 10px 19px;
  background: #f57b51;
  border-radius: 10px;
`;

export const PremiumButtonText = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;
