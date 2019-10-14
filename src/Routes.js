import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screen
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultShowScreen';

const MainStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    ResultShow: {
      screen: ResultShowScreen,
    },
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(MainStack);
