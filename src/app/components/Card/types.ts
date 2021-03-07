export type CardProps = {
  id: number;
  petType: string;
  title: string;
  subtitle: string;
  age: string;
  gender: string;
  photoSource: any;
};

export type CardStyleRowProps = {
  justify?: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: Number;
};

export type CardStyleGenderProps = {
  color: string;
};

export type {StackProps} from '../../../entry/routes/types';
