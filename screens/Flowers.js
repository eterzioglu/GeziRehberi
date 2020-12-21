import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../components/Colors";
import tempData from "../tempData";
import TodoList from "../components/TodoList";
import AddListModal from '../components/AddListModal';

const Flowers=()=> {


    const[addFlowersVisible,setFlowers]=useState(false)


    toggleAddFlowersModal=()=>{
      setFlowers(true)
     }
     
    closeModal=()=>{
      setFlowers(false)
     }

     renderList=list=>{
       return <TodoList list={list}/>
     }
     

    return (
      <View style={styles.container}>
        <Modal animationType="slide"
          visible={addFlowersVisible} 
          onRequestClose={toggleAddFlowersModal}>
            
            <AddListModal closeModal={closeModal}/>
        
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>FLOWERS</Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} onPress={toggleAddFlowersModal} >
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32}}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
          />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.green,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});

export default Flowers;
