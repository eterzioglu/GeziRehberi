import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Firebase from "../config/Firebase";
import { AntDesign } from "../node_modules/@expo/vector-icons";

console.disableYellowBox = true;

const AddListModal = () => {
  var backgroundColor = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#26C6DA",
    "#81C784",
    "#FFC107",
  ];
  const [name, setname] = useState("");
  const [color, setcolor] = useState({});

  createFlowersList = () => {
    var user = Firebase.auth().currentUser.email;
    Firebase.firestore()
      .collection("user")
      .doc(user)
      .collection(user)
      .doc(name)
      .set({
        name: name,
        color: color,
        water: false,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    closeModal();
  };

  renderColor = () => {
    return backgroundColor.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={{
            width: 30,
            height: 30,
            borderRadius: 4,
            backgroundColor: color,
          }}
          onPress={() => setcolor(color)}
        />
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>

      <View style={{ alignSelf: "stretch", marginHorizonal: 32 }}>
        <Text style={styles.title}>Create Flower</Text>

        <TextInput
          style={styles.input}
          placeholder="Flower Name?"
          onChangeText={(name) => setname(name)}
        />
        <Text style={styles.pickText}>Pick Color</Text>

        <View style={(stye = styles.colorContainer)}>
          <TouchableOpacity>
            <FlatList
              data={backgroundColor}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => renderColor(item)}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: color,
            marginTop: 24,
            height: 50,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            width: 310,
          }}
          onPress={createFlowersList}
        >
          <Text
            style={{ color: colors.black, fontWeight: "700", fontSize: 25 }}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightPink,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  pickText: {
    paddingTop: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    width: 310,
  },
});

export default AddListModal;
