import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal,Image,TextInput} from "react-native";
import colors from "./Colors";
import TodoModal from "./TodoModal";
import {Ionicons} from "../node_modules/@expo/vector-icons";
import { Entypo } from "../node_modules/@expo/vector-icons";
import { AntDesign } from "../node_modules/@expo/vector-icons";
import Firebase from "../config/Firebase";

const TodoList = ({ list }) => {
  const [showListVisible, setShowListVisible] = useState(false);
  
  const [checkbutton, setCheck] = useState(false);
  const [mynotes, setMyNotes] = useState("");

  toggleListModal = () => {
    setShowListVisible(true);
  };

  closeListModal = () => {
    setShowListVisible(false);
  };

  check=()=>{
    setCheck(true)

          var waterRef = Firebase.firestore().collection("Users").doc(list.name);

        // Set the "capital" field of the city 'DC'
        return waterRef.update({
            water: checkbutton
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

  };
  note=()=>{
    alert("Added Note")
  }
  return (
    <View>
      <Modal
        animationType="slide"
        visible={showListVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal list={list} closeModal={closeListModal} />
      </Modal>
      <View
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={toggleListModal}
      >
        <View style={{flexDirection:"row"}}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/no-image.jpg")}
          />
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <TouchableOpacity onPress={check}>
              <Ionicons
                name={checkbutton ? "ios-square" : "ios-square-outline"}
                size={30}
                color={colors.white}
                style={{ width: 32, alignSelf:"flex-end"}}
              />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", paddingLeft:165}}>
          <Entypo name="drop" size={20} color="#4FC3F7" />
          <Text style={{flex:1,fontSize:15, color:colors.white}}>{ checkbutton ? "I'm more alive now":"please water me"}</Text>
         </View>
         <View style={{flexDirection:"row", paddingLeft:165, paddingTop:5}}>
          <TextInput
            style={styles.input}
            placeholder="Take a Note"
            onChangeText={(mynotes) => setMyNotes(mynotes)}
          />      
           <TouchableOpacity onPress={note}>
            <AntDesign name="plus" size={20} color={colors.white} />
          </TouchableOpacity>
         </View>
         <View style={{flexDirection:"row", paddingLeft:165, paddingTop:5}}>
          <Text style={{color:colors.white}}>{mynotes}</Text>
         </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    borderRadius: 6,
    width: "150%",
    height:150,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
    paddingLeft:20
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
  input:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
    borderRadius: 6,
    height: 30,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    width: "45%",
    
  }
});

export default TodoList;