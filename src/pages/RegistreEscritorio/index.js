import React, { useState, Component, useEffect } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
//import firebase from 'firebase';
import firebase from '../../../Fire'
import * as ImagePicker from 'expo-image-picker';
export default function Login({ navigation }) {

 const [emailEscrit, setEmailEscrit] = useState('');
 const [nomeEscrit, setNomeEscrit] = useState('');
 const [areaEscrit, setAreaEscrit] = useState('');
 const [cnpjEscrit, setCnpjEscrit] = useState('');
 const [websiteEscrit, setWebsiteEscrit] = useState('');
 const [listFire, setListFire] = useState('');
 function pushFire() {
  try {
   firebase.database().ref('/crud').push({
    emailEscrit: emailEscrit,
    nomeEscrit: nomeEscrit,
    areaEscrit: areaEscrit,
    cnpjEscrit: cnpjEscrit,
    websiteEscrit: websiteEscrit,


   })
  } catch (error) {
   alert(error)
  }
  finally {
   setEmailEscrit('');
   setAreaEscrit('');
   setNomeEscrit('');
   setCnpjEscrit('');
   setWebsiteEscrit('');

  }
 }




 return (
  <View style={styles.container}>
   <Text style={styles.Texodaview}>Registre seu escritório!</Text>
   <TextInput style={styles.input}
    onChangeText={nomeEscrit => setNomeEscrit(nomeEscrit)} value={nomeEscrit}
    placeholder="NOME DO ESCRITÓRIO"
    placeholderTextColor="#0167C2cc"
   />

   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={emailEscrit => setEmailEscrit(emailEscrit)} value={emailEscrit}
    placeholder="EMAIL"
    placeholderTextColor="#0167C2cc"
   />

   <TextInput style={styles.input}
    onChangeText={areaEscrit => setAreaEscrit(areaEscrit)} value={areaEscrit}
    placeholder="ÁREA DE ATUAÇÃO"
    placeholderTextColor="#0167C2cc"
   />

   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={cnpjEscrit => setCnpjEscrit(cnpjEscrit)} value={cnpjEscrit}
    placeholder="CNPJ"
    placeholderTextColor="#0167C2cc"
   />

   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={websiteEscrit => setWebsiteEscrit(websiteEscrit)} value={websiteEscrit}
    placeholder="WEBSITE "
    placeholderTextColor="#0167C2cc"
   />


   < RectButton style={[styles.button, styles.buttonprimary]}
    onPress={() => {
     pushFire();
     navigation.navigate('EnderecoEscritorio', { nomeEscrit: nomeEscrit, emailEscrit: emailEscrit, areaEscrit: areaEscrit, cnpjEscrit: cnpjEscrit, websiteEscrit: websiteEscrit, });
    }} >
    <Text style={styles.login}>Continuar</Text>
   </RectButton>
  </View >


 );
}