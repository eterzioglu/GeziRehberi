/* eslint-disable prettier/prettier */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Historical from '../screens/Historical';
import ProfilePage from '../screens/Profile';
import Accomodation from '../screens/Accomodation';
import Natural from '../screens/Natural';

class HistoricalScreen extends React.Component {
  render() {
    return (
      <Historical
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

class AccomodationScreen extends React.Component {
  render() {
    return (
      <Accomodation
        navigator={navigator}
      />
    );
  }
}

class NaturalScreen extends React.Component {
  render() {
    return (
      <Natural
        navigator={navigator}
      />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Historical: {screen: HistoricalScreen},
  Accomodation: {screen: AccomodationScreen},
  Natural: {screen: NaturalScreen},
  Profile: {screen: ProfileScreen},
});

export default createAppContainer(TabNavigator);
