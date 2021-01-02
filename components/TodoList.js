import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "./Colors";
import { Ionicons } from "../node_modules/@expo/vector-icons";
import { Entypo } from "../node_modules/@expo/vector-icons";
import Firebase from "../config/Firebase";
import { getImageFromId } from "../utils/api";
import moment from "moment";

console.disableYellowBox = true;

const TodoList = ({ list }) => {
  const [checkbutton, setCheck] = useState(false);
  const [score, setScore] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  var DATE = [];
  const [date, setdate] = useState("12/27/2020");
  var id = [
    "152",
    "106",
    "239",
    "306",
    "530",
    "696",
    "958",
    "1022",
    "1043",
    "1068",
  ];

  useEffect(() => {
    var date = moment().format("L");
    setCurrentDate(date);
    console.log(currentDate);
    if (date != currentDate) {
      setCheck(false);
      setdate(currentDate);

      var user = Firebase.auth().currentUser.email;

      var waterRef = Firebase.firestore()
        .collection("user")
        .doc(user)
        .collection(user)
        .doc(list.name);
      return waterRef
        .update({
          water: false,
        })
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }, []);

  check = () => {
    if (checkbutton) {
      setCheck(false);
      var user = Firebase.auth().currentUser.email;
      var waterRef = Firebase.firestore()
        .collection("user")
        .doc(user)
        .collection(user)
        .doc(list.name);
      return waterRef
        .update({
          water: false,
        })
        .then(function () {
          console.log("Document successfully updated!");
        })
        .then(function () {
          setScore(score - 5);
          var scoreRef = Firebase.firestore().collection("user").doc(user);
          return scoreRef
            .update({
              Score: score,
            })
            .then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    } else {
      setCheck(true);
      var user = Firebase.auth().currentUser.email;
      var waterRef = Firebase.firestore()
        .collection("user")
        .doc(user)
        .collection(user)
        .doc(list.name);

      return waterRef
        .update({
          water: true,
        })
        .then(function () {
          console.log("Document successfully updated!");
        })
        .then(function () {
          setScore(score + 5);
          var scoreRef = Firebase.firestore().collection("user").doc(user);
          return scoreRef
            .update({
              Score: score,
            })
            .then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  };

  return (
    <View>
      <View style={[styles.listContainer, { backgroundColor: list.color }]}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: getImageFromId(id[Math.floor(Math.random() * id.length)]),
            }}
          />
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <TouchableOpacity onPress={check}>
            <Ionicons
              name={checkbutton ? "ios-square" : "ios-square-outline"}
              size={30}
              color={colors.white}
              style={{ width: 32, paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", paddingLeft: 160 }}>
          <Entypo name="drop" size={20} color="#4FC3F7" />
          <Text style={{ flex: 1, fontSize: 15, color: colors.white }}>
            {checkbutton ? "I'm more alive now" : "please water me"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    borderRadius: 6,
    width: 500,
    height: 150,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
    paddingLeft: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
  tinyLogo: {
    width: "30%",
    height: "300%",
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
    borderRadius: 6,
    height: 30,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    width: "45%",
  },
});

export default TodoList;
