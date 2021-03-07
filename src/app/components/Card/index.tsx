import React from 'react';
import {StyleSheet} from 'react-native';
import * as Utils from '../../../entry/utils';

import * as Styles from './styles';

import * as Types from './types';
import {AppContext} from '../../../entry/context';
import {useNavigation} from '@react-navigation/native';

const Card: React.FC<Types.CardProps> = ({
  id,
  petType,
  title,
  subtitle,
  age,
  gender,
  photoSource,
}) => {
  const Icon = Utils.getIconSvgByPetType(petType);
  const Gender = Utils.getGenderSvgByName(gender);

  const navigation = useNavigation();

  const viewPetInfo = (petId: number) => {
    console.log(navigation);
    navigation?.navigate('Info', {petId});
  };

  return (
    <Styles.Container style={sheet.card} onPress={() => viewPetInfo(id)}>
      <Styles.LeftSide>
        <Styles.PhotoContainer>
          <Styles.Photo source={photoSource} />
        </Styles.PhotoContainer>
      </Styles.LeftSide>
      <Styles.RightSide>
        <Styles.Column>
          <Styles.Row width={160}>
            <Styles.Title>{title}</Styles.Title>
            {Icon && <Icon fill="#C4C4C4" />}
          </Styles.Row>
          <Styles.Row width={160}>
            <Styles.Subtitle>{subtitle}</Styles.Subtitle>
          </Styles.Row>
        </Styles.Column>
        <Styles.Row justify="space-between">
          <Styles.Age>{age}</Styles.Age>
          <Styles.Dot />
          <Gender />
          <Styles.Gender color={Utils.getCardGenderColorByGender(gender)}>
            {Utils.getStringCapitalized(gender)}
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
    elevation: 2,
  },
});

export default Card;
