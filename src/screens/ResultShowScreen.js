import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id'); //resultList te olan id dir
  //console.log(id);
  console.log(result);
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
    <View style={[styles.container, {backgroundColor: randomRgb()}]}>
      <Text style={styles.text}>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
      <Text>
        {result.coordinates.latitude} {result.coordinates.longitude}
      </Text>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  image: {
    height: 200,
    width: 300,
    margin: 5,
  },
  text: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
