import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
  },
});
