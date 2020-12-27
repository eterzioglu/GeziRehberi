import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import colors from "../components/Colors";

console.disableYellowBox = true;

const Giris =props=> {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>Welcome</Text>
      <Text
      style = {styles.textbuttonStyle}
      onPress={() => navigation.navigate('GirisYap')}>Sign In</Text>
      <Text
      style = {styles.textbuttonStyle}
      onPress={() => navigation.navigate('KayitOl')}>Sign Up</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  textStyle:{
    color : colors.green,
    fontSize: 50,
    fontWeight: "bold",
  },
  textbuttonStyle:{
    color : colors.pink,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent:'space-between',
    paddingTop:'5%'
  }
});
export default Giris