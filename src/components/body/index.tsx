import React from 'react';

import * as Styles from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import {StyleSheet} from 'react-native';

import {getIconByPetType} from '../../utils';
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
            <Styles.Badge
              key={c.key}
              selected={category === c.key}
              onPress={() => setCategory(c.key)}>
              <Icon fill={category === c.key ? '#FFF' : '#777777'} />
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
