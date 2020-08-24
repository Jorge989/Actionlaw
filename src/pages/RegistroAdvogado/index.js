import React, { useState, useEffect } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { View, Text, TextInput, TouchableOpacity, Image, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import Addfoto from '../../../assets/icons/addfoto3.png'
import firebase from '../../../Fire'

export default function RegistroAdvogado({ navigation }) {


 const [email, setEmail] = useState('');
 const [nome, setNome] = useState('');
 const [area, setArea] = useState('');
 const [contato, setContato] = useState('');
 const [indenti, setIndenti] = useState('');
 const [listFire, setListFire] = useState('');
 function pushFire() {
  try {
   firebase.database().ref('/crud').push({
    email: email,
    nome: nome,
    area: area,
    contato: contato,
    indenti: indenti,


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

  }
 }


 return (
  <View style={styles.container}>
   <Text style={styles.Texodaview}>Registre</Text>
   <Text style={styles.Texodaview2}>seu time de advogados!</Text>



   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={nome => setNome(nome)} value={nome}

    placeholder="NOME"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={email => setEmail(email)} value={email}

    placeholder="EMAIL"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    onChangeText={area => setArea(area)} value={area}
    placeholder="ÁREA DE ATUAÇÃO"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={contato => setContato(contato)} value={contato}

    placeholder="CONTATO"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={indenti => setIndenti(indenti)} value={indenti}



    placeholder="INDENTIFICAÇÃO "
    placeholderTextColor="#0167C2cc"
   />

   <TouchableOpacity style={[styles.button2, styles.buttonprimary2]}
    onPress={() => navigation.navigate('ListaAdvogado')} >
    <Image style={styles.image} source={Addfoto} />
   </TouchableOpacity>
   <Text style={styles.Texodaview3}>
    Escolha uma Imagem
    </Text>


   < TouchableOpacity style={[styles.buttonPre, styles.buttonprimaryPre]}
    onPress={() => {
     pushFire();
     navigation.navigate('DescricaoAdvogado', { nome: nome, email: email, area: area, contato: contato, indenti: indenti, });
    }}>
    <Text style={styles.loginPre}>+ Descrição</Text>
   </TouchableOpacity >


  </View >


 );
}