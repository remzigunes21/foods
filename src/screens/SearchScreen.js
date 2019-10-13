import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>we have found {results.length} results </Text>
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
