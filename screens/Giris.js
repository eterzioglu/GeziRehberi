import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Giris =props=> {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>Gezi Rehberine Hoşgeldiniz</Text>
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
    backgroundColor: '#9ad3bc',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  textStyle:{
    color : 'red',
    fontSize: 30,
    fontWeight: "bold",
  },
  textbuttonStyle:{
    color : 'red',
    fontSize: 30,
    fontWeight: "bold",
    justifyContent:'space-between',
    paddingTop:'5%'
  }
});
export default Giris