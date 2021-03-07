import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as Types from './types';
import * as Utils from '../../../entry/utils';

import WithPhoto from './variations/WithPhoto';
import WithoutPhoto from './variations/WithoutPhoto';

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

  const viewPetInfo = (petId: number) => navigation?.navigate('Info', {petId});
  const genderColor = Utils.getCardGenderColorByGender(gender);
  const genderCapitalized = Utils.getStringCapitalized(gender);

  const commonProps = {
    title,
    subtitle,
    age,
    Icon,
    Gender,
  };

  return photoSource ? (
    <WithPhoto
      common={{...commonProps}}
      id={id}
      genderColor={genderColor}
      photoSource={photoSource}
      genderCapitalized={genderCapitalized}
      viewPetInfo={viewPetInfo}
    />
  ) : (
    <WithoutPhoto {...commonProps} />
  );
};

export default Card;
