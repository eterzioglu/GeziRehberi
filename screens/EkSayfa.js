import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import Firebase from "../config/Firebase";
import { useState } from "react";
import { StackActions } from "@react-navigation/native";

const EkSayfa = (props) => {
  const { navigation } = props;
  const [cicek, setcicek] = useState([]);
  const db = Firebase.firestore();
  const route = useRoute();
  var email = route.params.caption;

  DataEkle = () => {
    var cityRef = db.collection("deneme").doc(email);
    var setWithMerge = cityRef.set(
      {
        cicek: cicek,
      },
      { merge: true }
    );
    navigation.dispatch(
      StackActions.replace("Anasayfa", {
        user: email,
      })
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        onChangeText={(cicek) => setcicek(cicek)}
        defaultValue={cicek}
        placeholder="Flowers Name"
      />
      <TouchableOpacity style={styles.button} onPress={DataEkle}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ad3bc",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 15,
    borderColor: "#fff",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#db6400",
    borderColor: "#db6400",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});

export default EkSayfa;
