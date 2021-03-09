import {InfoScreenProps} from '../../../entry/routes/types';
export type {CardProps} from '../../components/Card/types';

export type InfoPageProps = InfoScreenProps;

export type InfoStylePhotoProps = {
  backgroundColor: string;
};

export type AvatarStyleRowProps = {
  justify?: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  spaced?: boolean;
};
