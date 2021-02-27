import React from 'react';

import * as Styles from './styles';
import MapPin from '../../assets/map-pin.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import HeaderDog from '../../assets/header-dog.svg';
import {StyleSheet} from 'react-native';

const Header: React.FC = () => {
  // const [location, setLocation] = React.useState<String>('');

  return (
    <Styles.HeaderContainer>
      <Styles.SmallFont>Location</Styles.SmallFont>
      <Styles.Select>
        <MapPin />
        <Styles.BigFont>Malang</Styles.BigFont>
        <ArrowDown />
      </Styles.Select>
      {/* <Select  TODO
          selectedValue={location}
          onValueChange={(value) => setLocation(value)}>
          <Select.Item label="Location 1" value="location-1" />
          <Select.Item label="Location 2" value="location-2" />
          <Select.Item label="Location 3" value="location-3" />
        </Select> */}
      <Styles.PremiumRow>
        <Styles.PremiumContainer>
          <Styles.PremiumTitle>Become premium with us</Styles.PremiumTitle>
          <Styles.PremiumDescription>
            Access more popular adopter and {'\n'}pets by upgrading to premium
          </Styles.PremiumDescription>
          <Styles.PremiumButton>
            <Styles.PremiumButtonText>Become Premium</Styles.PremiumButtonText>
          </Styles.PremiumButton>
        </Styles.PremiumContainer>
        <HeaderDog style={sheet.svg} />
      </Styles.PremiumRow>
    </Styles.HeaderContainer>
  );
};

const sheet = StyleSheet.create({
  svg: {
    position: 'absolute',
    right: -60,
    top: -105,
  },
});

export default Header;
