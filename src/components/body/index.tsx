import React from 'react';

import * as Styles from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import {StyleSheet} from 'react-native';
import Paw from '../../assets/paw.svg';
import Cat from '../../assets/cat.svg';
import Dog from '../../assets/dog.svg';
import Bird from '../../assets/bird.svg';

const Body: React.FC = () => {
  const [search, setSearch] = React.useState<String>('');
  const [category, setCategory] = React.useState<String>('all');

  const categories = [
    {label: 'All', key: 'all', icon: Paw},
    {label: 'Cat', key: 'cat', icon: Cat},
    {label: 'Dog', key: 'dog', icon: Dog},
    {label: 'Bird', key: 'bird', icon: Bird},
  ];

  return (
    <>
      <Styles.SearchBar style={sheet.searchContainer}>
        <Styles.IputBar onChangeText={(text) => setSearch(text)} />
        <SearchIcon />
        <Styles.SearchText>
          {!search && 'Search pet to adopt'}
        </Styles.SearchText>
      </Styles.SearchBar>
      <Styles.Categories>
        {categories.map((c) => {
          return (
            <Styles.Badge
              key={c.key}
              selected={category === c.key}
              onPress={() => setCategory(c.key)}>
              <c.icon fill={category === c.key ? '#FFF' : '#777777'} />
              <Styles.BadgeText selected={category === c.key}>
                {c.label}
              </Styles.BadgeText>
            </Styles.Badge>
          );
        })}
      </Styles.Categories>
    </>
  );
};

const sheet = StyleSheet.create({
  searchContainer: {
    elevation: 4,
  },
});

export default Body;
