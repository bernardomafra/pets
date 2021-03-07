import React from 'react';

// import * as Styles from './styles';

import {FlatList} from 'react-native';
import Card from '../Card';

import * as Types from './types';

const List: React.FC<Types.ListProps> = ({data}) => {
  const renderItem: Types.ListRenderItemReturn = ({item}) => (
    <Card
      id={item.id}
      photoSource={item.photoSource}
      petType={item.petType}
      title={item.title}
      subtitle={item.subtitle}
      age={item.age}
      gender={item.gender}
    />
  );

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
