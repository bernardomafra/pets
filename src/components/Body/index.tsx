import React from 'react';

import * as Styles from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import {StyleSheet} from 'react-native';

import Badge from '../Badge';
import List from '../List';

import * as Types from './types';

const Body: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('all');
  const [categories, setCategories] = React.useState<Types.Category[]>([]);

  React.useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((err) => console.log('Error while fetch categories: ', err));
  }, []);

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
            <Badge
              key={c.petType}
              petType={c.petType}
              label={c.label}
              selected={category === c.petType}
              onClickAction={() => setCategory(c.petType)}
            />
          );
        })}
      </Styles.Categories>
      <List />
    </>
  );
};

const sheet = StyleSheet.create({
  searchContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#F4F',
  },
  itemView: {},
});

export default Body;
