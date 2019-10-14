import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = props => {
  // console.log(props);//ONEMLİ....//bradaki props objesi navigation kutuphanelerini de miras alır..yani o özellikleride kendi içinde barındırabilir
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  //console.log(results);
  const filterResultsByPrice = price => {
    //price === "$"|| "$$"||"$$$" //bu price api nin bir attributu dur
    //bu dolar işaretleri de api de var bunlar ucuz ve pahalı yemekleri belirtir
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
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
