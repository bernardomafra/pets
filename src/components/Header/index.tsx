import React from 'react';

import * as Styles from './styles';
import MapPin from '../../assets/map-pin.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import HeaderDog from '../../assets/header-dog.svg';
import {StyleSheet, Keyboard} from 'react-native';

const Header: React.FC = () => {
  const [location, setLocation] = React.useState<String>('Sabará');
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);

  Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
  Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));

  return (
    <Styles.HeaderContainer>
      <Styles.SmallFont>Location</Styles.SmallFont>
      <Styles.Select>
        <MapPin />
        <Styles.BigFont>{location}</Styles.BigFont>
        <ArrowDown />
      </Styles.Select>
      {!isKeyboardOpen && (
        <Styles.PremiumRow>
          <Styles.PremiumContainer>
            <Styles.PremiumTitle>Become premium with us</Styles.PremiumTitle>
            <Styles.PremiumDescription>
              Access more popular adopter and {'\n'}pets by upgrading to premium
            </Styles.PremiumDescription>
            <Styles.PremiumButton>
              <Styles.PremiumButtonText>
                Become Premium
              </Styles.PremiumButtonText>
            </Styles.PremiumButton>
          </Styles.PremiumContainer>
          <HeaderDog style={sheet.svg} />
        </Styles.PremiumRow>
      )}
    </Styles.HeaderContainer>
  );
};

const sheet = StyleSheet.create({
  svg: {
    position: 'absolute',
    right: -60,
    top: -105,
  },
  picker: {
    position: 'absolute',
    top: 20,
    left: 125,

    width: '10%',
    fontSize: 24,
    color: '#555555',
    fontFamily: 'MontserratAlternates-Medium',
  },
  item: {
    fontFamily: 'MontserratAlternates-Medium',
    opacity: 0.1,
    color: '#37891f',
  },
});

export default Header;
