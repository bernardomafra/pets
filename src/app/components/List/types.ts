import {CardProps} from '../Card/types';
import {ListRenderItem} from 'react-native';

export type ListProps = {
  data: CardProps[];
};

export type ListRenderItemReturn = ListRenderItem<CardProps>;
