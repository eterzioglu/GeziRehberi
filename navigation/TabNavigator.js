/* eslint-disable prettier/prettier */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Flowers from '../screens/Flowers';
import ProfilePage from '../screens/Profile';

class FlowerScreen extends React.Component {
  render() {
    return (
      <Flowers
        navigator={navigator}
      />
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <ProfilePage
        navigator={navigator}
      />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Flowers: {screen: FlowerScreen},
  Profile: {screen: ProfileScreen},
});

export default createAppContainer(TabNavigator);
