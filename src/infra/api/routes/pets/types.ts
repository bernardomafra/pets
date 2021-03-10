import {CardProps} from '../../../../app/components/Card/types';
import {ImageSourcePropType} from 'react-native';

export type Category = string | 'all' | 'cat' | 'dog' | 'bird';

type PetOwner = {
  name: string;
  registerDate: string;
  image: ImageSourcePropType;
};

export type PetReturn = CardProps & {
  description: string;
  traits: string[];
  owner: PetOwner;
};
