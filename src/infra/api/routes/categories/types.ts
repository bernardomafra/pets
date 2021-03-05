import {CardProps} from '../../../../components/Card/types';

export type CategoriesReturn = {
  label: string;
  petType: string;
  icon?: string;
};

export type Category = string | 'all' | 'cat' | 'dog' | 'bird';

export type CategoryReturn = CardProps[];
