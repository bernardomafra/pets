import React from 'react';

// import * as Styles from './styles';

import {FlatList, ListRenderItem} from 'react-native';
import Card from '../Card';

import * as Types from './types';

const List = () => {
  const renderItem: ListRenderItem<Types.CardProps> = ({item}) => (
    <Card
      photoSource={item.photoSource}
      petType={item.petType}
      title={item.title}
      subtitle={item.subtitle}
      age={item.age}
      gender={item.gender}
    />
  );

  const data: Types.CardProps[] = [
    {
      petType: 'dog',
      title: 'Buddy',
      subtitle: 'Shiba Inu',
      age: '1 Year old',
      gender: 'boy',
      photoSource: require('../../assets/buddy.png'),
    },
    {
      petType: 'cat',
      title: 'Cooter',
      subtitle: 'Maine Coon',
      age: '6 Months old',
      gender: 'girl',
      photoSource: require('../../assets/cooter.png'),
    },
    {
      petType: 'cat',
      title: 'Cooterasd',
      subtitle: 'Maine Coon',
      age: '6 Months old',
      gender: 'girl',
      photoSource: require('../../assets/cooter.png'),
    },
  ];

  return (
    <FlatList
      data={data}
      scrollEnabled={true}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default List;
