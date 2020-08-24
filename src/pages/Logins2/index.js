{/*import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, FlatList, AsyncStorage, TouchableOpacity, ActivityIndicator, SnapshotViewIOS, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import * as Google from 'expo-google-app-auth';
import { setTokenSourceMapRange } from 'typescript';
import firebase from '../../../Fire'
import Googelog from './googlelog'

import * as AppAuth from 'expo-app-auth';



export default function Login2({ navigation }) {
 let [authState, setAuthState] = useState(null);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [listFire, setListFire] = useState('');





 function pushFire() {
  try {
   firebase.database().ref('/crud').push({
    email: email,
    password: password

   })
  } catch (error) {
   alert(error)
  }
  finally {
   setEmail('');
   setPassword('');

  }
 }



 return (


  <View style={styles.container}>


   <Text style={styles.Texodaview}>Usuario</Text>
   <TextInput style={styles.input}
    onChangeText={email => setEmail(email)} value={email}
    placeholder="Usuário"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}

    secureTextEntry={true}
    onChangeText={password => setPassword(password)} value={password}
    placeholder="Senha"
    placeholderTextColor="#0167C2cc"
   />

   <RectButton style={[styles.button, styles.buttonprimary]}
    onPress={pushFire}
   >

    <Text style={styles.login}>Login</Text>
   </RectButton>

   <TouchableOpacity style={[styles.buttonradius, styles.buttonprimary]}
    onPress={() => navigation.navigate('RegistroEscritorio')} >
   </TouchableOpacity>
   <Text style={styles.lembreme}>Lembre-me</Text>

   <TouchableOpacity style={[styles.esqueceubutton, styles.buttonprimary]}
    onPress={() => navigation.navigate('googlelog')} >


    <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>

   </TouchableOpacity>
  </View>


 );
}*/}