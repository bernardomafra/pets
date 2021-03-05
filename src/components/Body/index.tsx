import React from 'react';
import {StyleSheet} from 'react-native';

import SearchIcon from '../../assets/search-icon.svg';

import CategoryService from '../../infra/services/category';

import Badge from '../Badge';
import List from '../List';

import * as Styles from './styles';
import * as Types from './types';

const Body: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('all');
  const [categories, setCategories] = React.useState<Types.Category[]>([]);
  const [pets, setPets] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function loadCategories() {
      const response = await CategoryService.getAllCategories();
      if (response) {
        setCategories(response);
      }
    }

    loadCategories();
  }, []);

  React.useEffect(() => {
    async function loadCategory() {
      const response = await CategoryService.getCategoryByName(category);
      if (response) {
        setPets(response);
      }
    }

    loadCategory();
  }, [category]);

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
      {pets && <List data={pets} />}
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
});

export default Body;
