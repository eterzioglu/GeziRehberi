import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Firebase from "../config/Firebase";
import colors from "../components/Colors";

const Profile = (props) => {
  const { navigation } = props;
  const route = useRoute();
  var email = route.params.caption;
  var Email = route.params.c;
  var user = [];
  var score = [];

  var Flowers = [];

  const [cicekler, setcicekler] = useState([]);
  const [username, setUsername] = useState([]);

  const [score_, setscore] = useState([]);
  const db = Firebase.firestore();

  useEffect(() => {
    db.collection("user").onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.id === Email || doc.id === email) {
          user.push(doc.data().Username);
          score.push(doc.data().Score);
        }
      });
      setUsername(user);
      setscore(score);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>{username} Profile</Text>

      <View style={styles.container2}>
        <Text style={styles.textpoint}>Point : {score_}</Text>
      </View>
      <Text style={styles.text}>
        If you want to earn more points don't forget to water your flowers
        everyday
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,

    justifyContent: "center",
    alignContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: colors.lightPink,

    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    color: colors.blue,
    alignSelf: "center",
    padding: "15%",
  },
  texttitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.green,
    alignSelf: "center",
    paddingTop: "1%",
  },
  textpoint: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.pink,
    alignSelf: "center",
    paddingTop: "1%",
  },
});

export default Profile;
