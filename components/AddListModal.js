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
import { AntDesign } from "../node_modules/@expo/vector-icons";
import tempData from "../tempData";

const AddListModal = () => {
  /* state={F
        name:"",
        color:this.backgroundColor[0]
    };*/

  const [name, setname] = useState("");
  const [color, setcolor] = useState({});

  createFlowersList = () => {
    tempData.push({
      name,
      color: "purple",
      todos: [],
    });

    setname("");
    // closeModal();
  };

  renderColor = () => {
    // backgroundColor=["#F44336", "#E91E63","#9C27B0","#673AB7","#2196F3","#4CAF50","#FF9800"]

    return this.backgroundColor.map((color) => {
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
        <Text style={styles.title}>Create Flowers List</Text>
        <TextInput
          style={styles.input}
          placeholder="List Name?"
          onChangeText={(text) => setname(text)}
        />

        <View
          style={{
            paddingLeft: 25,
            width: 330,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12,
          }}
        ></View>

        <TouchableOpacity
          style={{
            backgroundColor: "blue",
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
          <Text style={{ color: colors.white, fontWeight: "600" }}>Create</Text>
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
  create: {},
});

export default AddListModal;
