import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Giris from '../screens/Giris';
import KayitOl from '../screens/KayitOl';
import GirisYap from '../screens/GirisYap';
import SifremiUnuttum from '../screens/SifremiUnuttum';
import Anasayfa from '../screens/Anasayfa';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Giris">
            
        <Stack.Screen name="Giris" component={Giris} />
        <Stack.Screen name="KayitOl" component={KayitOl} />
        <Stack.Screen name="GirisYap" component={GirisYap} />
        <Stack.Screen name="SifremiUnuttum" component={SifremiUnuttum} />
        <Stack.Screen name="Anasayfa" component={Anasayfa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;