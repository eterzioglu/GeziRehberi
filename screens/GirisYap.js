import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Image,
} from "react-native";
import Firebase from "../config/Firebase";
import colors from "../components/Colors";

console.disableYellowBox = true;

const GirisYap = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Anasayfa", { c: email }))
      .catch((error) => alert(error));
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

        <TouchableOpacity onPress={() => navigation.navigate("SifremiUnuttum")}>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("KayitOl")}>
          <Text style={styles.text}>Don't have an account?Create One.</Text>
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
    fontSize: 16,
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
  text: {
    color: colors.pink,
    fontSize: 20,
  },
});

export default GirisYap;
