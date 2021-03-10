import {ImageSourcePropType} from 'react-native';

export interface AvatarProps {
  image?: ImageSourcePropType;
  name: string;
  subtitle: string;
  date?: string;
}

export type AvatarStyleRowProps = {
  justify?: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  spaced?: boolean;
};
