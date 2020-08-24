import React, { useState, useEffect } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import Routes from '../../routes';
export default function DescricaoAdvogado({ navigation, route }) {

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
   <Text style={styles.Texodaview}>Descrição do perfil</Text>
   <TextInput style={styles.input}
    onChangeText={descricao => setDescricao(descricao)} value={descricao}
    placeholder="DIGITE SOBRE O PERFIL DO ADVOGADO:"
    placeholderTextColor="#0167C2cc"
   />
   <Text>{route.params.nome}Screen</Text>

   < RectButton style={[styles.button, styles.buttonprimary]}
    onPress={() => {
     pushFire();
     navigation.navigate('ListaAdvogado', { nome: nome, email: email, area: area, contato: contato, indenti: indenti, descricao: descricao });
    }}
   >
    <Text style={styles.login}>Continuar</Text>
   </RectButton>

  </View >


 );

}

