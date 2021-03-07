import React from 'react';

// import * as Styles from './styles';

import {FlatList, StyleSheet, View} from 'react-native';
import Card from '../Card';

import * as Types from './types';

const List: React.FC<Types.ListProps> = ({data}) => {
  const renderItem: Types.ListRenderItemReturn = ({item}) => (
    <View style={sheet.listItem}>
      <Card
        id={item.id}
        photoSource={item.photoSource}
        petType={item.petType}
        title={item.title}
        subtitle={item.subtitle}
        age={item.age}
        gender={item.gender}
      />
    </View>
  );

  return (
    <View style={sheet.listContainer}>
      <FlatList
        ListFooterComponent={<View style={sheet.end} />}
        data={data}
        scrollEnabled={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const sheet = StyleSheet.create({
  listContainer: {
    display: 'flex',
    // backgroundColor: '#F96',
    marginVertical: 5,
  },
  listItem: {
    marginVertical: 25,
  },
  end: {},
});

export default List;
