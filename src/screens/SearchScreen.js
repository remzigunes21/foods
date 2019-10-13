import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
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
