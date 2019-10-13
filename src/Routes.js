import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import SearchScreen from './screens/SearchScreen';

const MainStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
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
