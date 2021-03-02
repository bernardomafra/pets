import React from 'react';
import {Image} from 'react-native';
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
    <Styles.Container>
      <Styles.LeftSide>
        <Styles.Photo source={require('../../assets/buddy.png')} />
      </Styles.LeftSide>
      <Styles.RightSide>
        <Styles.Header>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Subtitle>{subtitle}</Styles.Subtitle>
          {Icon && <Icon />}
        </Styles.Header>
        <Styles.Footer>
          <Styles.Age>{age}</Styles.Age>
          <Gender />
        </Styles.Footer>
      </Styles.RightSide>
    </Styles.Container>
  );
};

export default Card;
