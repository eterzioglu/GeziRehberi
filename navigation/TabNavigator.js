import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Flowers from "../screens/Flowers";
import ProfilePage from "../screens/Profile";

class FlowerScreen extends React.Component {
  render() {
    return <Flowers navigator={navigator} />;
  }
}

class ProfileScreen extends React.Component {
  render() {
    return <ProfilePage navigator={navigator} />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Flowers: {
    screen: FlowerScreen,
    navigationOptions: {
      tabBarLabel: "Flowers",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-flower" color={tintColor} size={25} />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="user" color={tintColor} size={25} />
      ),
    },
  },
});
