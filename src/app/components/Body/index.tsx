import React from 'react';

import SearchIcon from '../../assets/search-icon.svg';

import CategoryService from '../../../infra/services/category';
import PetsService from '../../../infra/services/pets';

import Badge from '../Badge';
import List from '../List';

import * as Styles from './styles';
import * as Types from './types';
import {GlobalSheet} from '../../pages/global/styles';

const Body: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('all');
  const [categories, setCategories] = React.useState<Types.Category[]>([]);
  const [pets, setPets] = React.useState<Types.CardProps[]>([]);

  React.useEffect(() => {
    async function loadCategories() {
      const response = await CategoryService.getAll();
      if (response) {
        setCategories(response);
      }
    }

    loadCategories();
  }, []);

  React.useEffect(() => {
    async function loadPets() {
      const response = await PetsService.getByCategory(category);
      if (response) {
        setPets(response);
      }
    }

    loadPets();
  }, [category]);

  React.useEffect(() => {
    async function loadPets() {
      if (search) {
        const response = await PetsService.getByName(search);
        if (response) {
          setPets(response);
        }
      }
    }

    loadPets();
  }, [search]);

  return (
    <>
      <Styles.SearchBar style={GlobalSheet.boxShadow}>
        <Styles.InputBar onChangeText={(text) => setSearch(text)} />
        <SearchIcon />
        <Styles.SearchText>
          {!search && 'Procure um pet pelo seu nome'}
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

export default Body;
