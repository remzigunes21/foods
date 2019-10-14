import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id'); //resultList te olan id dir
  //console.log(id);
  // console.log(result);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({});
