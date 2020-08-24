import React, { useState } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import firebase from '../../../Fire'
export default function Login({ navigation, route }) {
 const [email, setEmail] = useState('');
 const [nome, setNome] = useState('');
 const [area, setArea] = useState('');
 const [contato, setContato] = useState('');
 const [indenti, setIndenti] = useState('');
 const [descricao, setDescricao] = useState('');
 const [listFire, setListFire] = useState('');
 function pushFire() {
  try {
   firebase.database().ref('/crud').push({
    email: email,
    nome: nome,
    area: area,
    contato: contato,
    indenti: indenti,
    descricao: descricao,


   })
  } catch (error) {
   alert(error)
  }
  finally {
   setEmail('');
   setArea('');
   setNome('');
   setContato('');
   setIndenti('');
   setDescricao('');

  }
 }




 return (
  <View style={styles.container}>
   <Text style={styles.Texodaview}>Descrição do escritório</Text>
   <TextInput style={styles.input}
    onChangeText={descricao => setDescricao(descricao)} value={descricao}
    placeholder="DIGITE SOBRE O ESCRITÓRIO"
    placeholderTextColor="#0167C2cc"
   />


   < RectButton style={[styles.button, styles.buttonprimary]}
    onPress={() => {
     pushFire();
     navigation.navigate('ImagemEscritorio', { descricao: descricao });
    }}>

    <Text style={styles.login}>Continuar</Text>
   </RectButton>

  </View >


 );
}