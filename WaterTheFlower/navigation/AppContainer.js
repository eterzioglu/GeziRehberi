import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Giris from "../screens/Giris";
import KayitOl from "../screens/KayitOl";
import GirisYap from "../screens/GirisYap";
import SifremiUnuttum from "../screens/SifremiUnuttum";
import Anasayfa from "../screens/Anasayfa";
import { Title } from "native-base";

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Giris">
        <Stack.Screen
          name="Giris"
          component={Giris}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="KayitOl"
          component={KayitOl}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="GirisYap"
          component={GirisYap}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="SifremiUnuttum"
          component={SifremiUnuttum}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Anasayfa"
          component={Anasayfa}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
