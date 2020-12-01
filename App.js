import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>Gezi Rehberine Hoşgeldiniz</Text>
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
    fontWeight: "bold"

  },
});
