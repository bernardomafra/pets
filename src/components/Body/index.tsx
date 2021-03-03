import React from 'react';

import * as Styles from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import {StyleSheet} from 'react-native';

import Badge from '../Badge';

import * as Types from './types';
import Card from '../Card';

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
        {/* <SearchIcon /> */}
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
      <Card
        petType="dog"
        title="Buddy"
        subtitle="Shiba Inu"
        age="1 Year old"
        gender="boy"
      />
    </>
  );
};

const sheet = StyleSheet.create({
  searchContainer: {
    elevation: 4,
  },
});

export default Body;
