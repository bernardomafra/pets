import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {getIconSvgByPetType, getGenderSvgByName} from '../../utils';

import * as Styles from './styles';

import * as Types from './types';

const Card: React.FC<Types.CardProps> = ({
  petType,
  title,
  subtitle,
  age,
  gender,
}) => {
  const Icon = getIconSvgByPetType(petType);
  const Gender = getGenderSvgByName(gender);

  return (
    <Styles.Container style={sheet.card}>
      <Styles.LeftSide>
        {/* <Styles.Photo source={require('../../assets/buddy.png')} /> */}
      </Styles.LeftSide>
      <Styles.RightSide>
        <Styles.Column>
          <Styles.Row width={150}>
            <Styles.Title>{title}</Styles.Title>
            {Icon && <Icon fill="#C4C4C4" />}
          </Styles.Row>
          <Styles.Row width={150}>
            <Styles.Subtitle>{subtitle}</Styles.Subtitle>
          </Styles.Row>
        </Styles.Column>
        <Styles.Row justify="space-between">
          <Styles.Age>{age}</Styles.Age>
          <Styles.Dot />
          <Gender />
          <Styles.Gender color="#F46546">
            {gender.charAt(0).toUpperCase()}
          </Styles.Gender>
        </Styles.Row>
      </Styles.RightSide>
    </Styles.Container>
  );
};

const sheet = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Card;
