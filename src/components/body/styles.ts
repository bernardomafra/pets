import styled from 'styled-components/native';

type BadgeProps = {
  selected?: boolean | false;
};

export const SearchBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  background-color: #fff;

  border-radius: 20px;
  padding: 30px 15px;

  position: relative;
`;

export const IputBar = styled.TextInput`
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

export const Badge = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 84px;

  background: ${(props: BadgeProps) =>
    props.selected ? '#F57B51' : 'rgba(196, 196, 196, 0.15)'};
  border-radius: 10px;
`;

export const BadgeText = styled.Text`
  color: ${(props: BadgeProps) => (props.selected ? '#FFF' : '#777777')};
`;
