import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Firebase from '../config/Firebase';
import { useState } from 'react'
import colors from "../components/Colors";

console.disableYellowBox = true;

const SifremiUnuttum =props=> {

    const {navigation} = props;
    const[email,setEmail]=useState('');

    forgotPassword = () => {
        Firebase.auth().sendPasswordResetEmail(email)
          .then(function (user) {
            alert('Please check your e-mail!')
          })
          .then(() => navigation.navigate('GirisYap'))
          .catch(function (e) {
            console.log(e)
          })
      }  

        return (
            <View style={styles.container}>
               
                <TextInput
                    style={styles.inputBox}
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}
                    placeholder='Email'
                    autoCapitalize='none'
                />
      
                <TouchableOpacity 
                style={styles.button}
                onPress={forgotPassword}>
                    <Text style={styles.buttonText}>Reset My Password</Text>
                </TouchableOpacity>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightPink,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: "#fff",
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: colors.pink,
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default SifremiUnuttum