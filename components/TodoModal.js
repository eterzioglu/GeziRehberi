import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity, FlatList,KeyboardAvoidingView,TextInput} from "react-native";

import { AntDesign,Ionicons } from "@expo/vector-icons";
import colors from "./Colors";

const TodoModal =({list})=>{

    const[name,setname]=useState(list.name)

    const[color,setcolor]=useState(list.color)

    const[todos,settodos]=useState(list.todos)
    const taskCount=todos.length
    const completeCount=todos.filter(todo=>todo.completed).length


    renderTodo=todo=>{
        return(
            <View style={styles.todoContainer}>
               <TouchableOpacity >
                   <Ionicons name={todo.completed ? "ios-square":"ios-square-outline"} size={24} color={colors.gray} style={{width:32}}/>
               </TouchableOpacity>
               <Text style={[styles.todo,{textDecorationLine:todo.completed ? "line-through" :"none",color:todo.completed ? colors.gray:colors.black}]}>{todo.title}</Text>
            </View>
        )
    }

    return(
       <SafeAreaView style={styles.container}>
          <TouchableOpacity style={{position:"absolute", top:64, right:32}} onPress={closeModal}>
                    <AntDesign name="close" size={24} color={colors.black}/>
          </TouchableOpacity>

          <View style={[styles.section, styles.header,{borderBottomColor:color}]}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.taskCount}>
                  {completeCount} of {taskCount} tasks
              </Text>
          </View>


          <View style={styles.section,{flex:3}}>
              <FlatList 
              data={todos} 
              renderItem={({item})=>renderTodo(item)} 
              keyExtractor={item=>item.title}
              contentContainerStyle={{paddingHorizontal:32,paddingVertical:64}}
              showsVerticalScrollIndicator={false}
              />
          </View>
          <KeyboardAvoidingView style={[styles.section,styles.footer]} s>
            <TextInput placeholder="xxxx" style={[styles.input,{borderColor:color}]}/>
            <AntDesign name="plus" size={16} color={colors.blue} />
         
          </KeyboardAvoidingView>
       </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingVertical:20,
    },
    section:{
        flex:1,
        alignItems:"stretch"
    },
    header:{
        justifyContent:"flex-end",
        paddingHorizontal:32,
        borderBottomWidth:3
    },
    title:{
        fontSize:30,
        fontWeight:"800",
        color:colors.black
    },
    taskCount:{
       marginTop:4,
       marginBottom:16,
       color: colors.gray,
       fontWeight:"600"

    },
    footer:{
        paddingHorizontal:32,
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        flex:1,
        height:48,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:6,
        marginBottom:8,
        paddingHorizontal:8
    },
    addTodo:{
        borderRadius:4,
        padding:16,
        alignItems:"center",
        justifyContent:"center"
    },
    todoContainer:{
        paddingVertical:16,
        flexDirection:"row",
        alignItems:"center"
    },
    todo:{
        color:colors.blue,
        fontWeight:"700",
        fontSize:16,
    }
})
export default TodoModal;