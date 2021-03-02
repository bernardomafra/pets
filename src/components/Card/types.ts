export type CardProps = {
  petType: string;
  title: string;
  subtitle: string;
  age: string;
  gender: string;
};

export type CardStyleRowProps = {
  justify?: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: Number;
};

export type CardStyleGenderProps = {
  color: string;
};
