import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id'); //resultList te olan id dir
  //console.log(id);
  const getResult = async id => {
    const response = await yelp.get(`${id}`);

    response.data;
  };
  return (
    <View>
      <Text>ResultShowScreen</Text>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({});
