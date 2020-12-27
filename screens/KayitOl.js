import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import Firebase from "../config/Firebase";
import { useState } from "react";
import colors from "../components/Colors";

console.disableYellowBox = true;

const KayitOl = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const db = Firebase.firestore();

  handleSignUp = () => {
    db.collection("Users").doc(email).set({
      Username: username,
    });
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Anasayfa", { caption: email }))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image style={styles.image} source={require("../assets/flower.png")} />
        <Image style={styles.image1} source={require("../assets/flower.png")} />
        <Image style={styles.image2} source={require("../assets/flower.png")} />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(username) => setUsername(username)}
          defaultValue={username}
          placeholder="User Name"
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
          placeholder="E-mail"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
  input: {
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    paddingTop: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },
  image2: {
    width: 100,
    height: 100,
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
    backgroundColor: colors.pink,
    borderColor: colors.pink,
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

export default KayitOl;
