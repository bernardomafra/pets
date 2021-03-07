import {ImageSourcePropType} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type {StackProps} from '../../../entry/routes/types';

export type CardProps = {
  id: number;
  petType: string;
  title: string;
  subtitle: string;
  age: string;
  gender: string;
  photoSource?: ImageSourcePropType;
};

type NonCommon = 'photoSource' | 'id' | 'petType' | 'gender';

export type CommonCardProps = Omit<CardProps, NonCommon> & {
  Icon: React.FC<SvgProps>;
  Gender: React.FC<SvgProps>;
};

export type CardStyleRowProps = {
  justify?: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: Number;
  spaced?: boolean;
};

export type CardStyleGenderProps = {
  color: string;
};

export type CardStyleContainerProps = {
  direction?: 'row' | 'column';
};
