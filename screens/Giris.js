import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../components/Colors";

console.disableYellowBox = true;

const Giris = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image source={require("../assets/half.png")} />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.textStyle}>Welcome</Text>
        <Text
          style={styles.textbuttonStyle}
          onPress={() => navigation.navigate("GirisYap")}
        >
          Sign In
        </Text>
        <Text
          style={styles.textbuttonStyle}
          onPress={() => navigation.navigate("KayitOl")}
        >
          Sign Up
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  buttons: {
    paddingTop:"20%",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    paddingTop:"1%",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  textStyle: {
    color: colors.green,
    fontSize: 50,
    fontWeight: "bold",
  },
  textbuttonStyle: {
    color: colors.pink,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "space-between",
    paddingTop: "2%",
  },
});
export default Giris;
