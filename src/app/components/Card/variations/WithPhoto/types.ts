import {ImageSourcePropType} from 'react-native';
import {CommonCardProps} from '../../types';

export type CardWithPhotoProps = {
  viewPetInfo: Function;
  genderCapitalized: string;
  genderColor: string;
  photoSource?: ImageSourcePropType;
  photoBackgroundColor: string;
  id: number;
  common: CommonCardProps;
};
