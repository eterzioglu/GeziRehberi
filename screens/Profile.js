import React, { useState,useEffect  } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Firebase from '../config/Firebase';

const Profile =props=> {
    const {navigation} = props;
    const route = useRoute();
    var email=route.params.caption
    var Email=route.params.c
    var user=[];
    const[username, setUsername]=useState([])
    const db = Firebase.firestore();

    useEffect(() => {
      db.collection("Users")
      .onSnapshot(function(querySnapshot) {
          
          querySnapshot.forEach(function(doc) {
            if((doc.id===Email) || (doc.id===email)){
              user.push(doc.data().Username);}
          });
        setUsername(user)
      });
    },[])



    return (
      <View style={styles.container}>
        <Text style={styles.text}>{username} Profile</Text>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ad3bc',
  },
  text:{
  fontSize:30,
  color:'#db6400',
  alignSelf:"center"
  }
});

export default Profile;