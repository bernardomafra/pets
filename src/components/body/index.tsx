import React from 'react';

import * as Styles from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import {StyleSheet} from 'react-native';

const Body: React.FC = () => {
  const [search, setSearch] = React.useState<String>('');

  return (
    <Styles.SearchBar style={sheet.searchContainer}>
      <Styles.IputBar onChangeText={(text) => setSearch(text)} />
      <SearchIcon />
      <Styles.SearchText>{!search && 'Search pet to adopt'}</Styles.SearchText>
    </Styles.SearchBar>
  );
};

const sheet = StyleSheet.create({
  searchContainer: {
    elevation: 4,
  },
});

export default Body;
