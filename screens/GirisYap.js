import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/Firebase';

const GirisYap =props=>  {

    const {navigation} = props;
    const[email,setEmail]=useState('');
    const [password, setPassword] = useState('');

    handleLogin = () => {
  
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Anasayfa'))
            .catch(error => alert(error))
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
                <TextInput
                    style={styles.inputBox}
                    onChangeText={password => setPassword(password)}
                    defaultValue={password}
                    placeholder='Password'
                    secureTextEntry={true}
                />

                 <TouchableOpacity 
                 onPress={() => navigation.navigate('SifremiUnuttum')} >
                    <Text style={styles.text}>Şifremi Unuttum?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Anasayfa')}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                 onPress={() => navigation.navigate('KayitOl')}
                 >
                     <Text style={styles.text}>Bir Hasabın Yok Mu? Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
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
    },
    text:{
    color:'#F6820D',
    fontSize:20
    },
})

export default GirisYap
