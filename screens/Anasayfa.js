import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Giris =props=> {
    
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>Ana sayfaya hoşgeldiniz</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    padding:'20%'
  },

});



export default Giris