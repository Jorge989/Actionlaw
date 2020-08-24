import React, { useState, useEffect } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import firebase from '../../../Fire'
export default function Login({ navigation, routes }) {


 const [ruainfo, setRuaInfo] = useState('');
 const [cepinfo, setCepInfo] = useState('');
 const [bairroinfo, setBairroInfo] = useState('');
 const [numeroinfo, setNumeroInfo] = useState('');
 const [complemento, setCompelemento] = useState('');
 const [listFire, setListFire] = useState('');
 function pushFire() {
  try {
   firebase.database().ref('/crud').push({
    ruainfo: ruainfo,
    cepinfo: cepinfo,
    bairroinfo: bairroinfo,
    numeroinfo: numeroinfo,
    complemento: complemento,


   })
  } catch (error) {
   alert(error)
  }
  finally {
   setRuaInfo('');
   setCepInfo('');
   setBairroInfo('');
   setNumeroInfo('');
   setCompelemento('');

  }
 }

 return (
  <View style={styles.container}>

   <Text style={styles.Texodaview}>Informar endereço</Text>
   <TextInput style={styles.input}
    onChangeText={ruainfo => setRuaInfo(ruainfo)} value={ruainfo}
    placeholder="RUA"
    placeholderTextColor="#0167C2cc"
   />

   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={cepinfo => setCepInfo(cepinfo)} value={cepinfo}
    placeholder="CEP"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    onChangeText={bairroinfo => setBairroInfo(bairroinfo)} value={bairroinfo}
    placeholder="BAIRRO"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={numeroinfo => setNumeroInfo(numeroinfo)} value={numeroinfo}
    placeholder="NÚMERO"
    placeholderTextColor="#0167C2cc"
   />
   <TextInput style={styles.input}
    autoCorrect={false}
    onChangeText={complemento => setCompelemento(complemento)} value={complemento}
    placeholder="COMPLEMENTO"
    placeholderTextColor="#0167C2cc"
   />
   < RectButton style={[styles.button, styles.buttonprimary]}
    onPress={() => {
     pushFire();
     navigation.navigate('DescricaoEscritorio', { ruainfo: ruainfo, cepinfo: cepinfo, bairroinfo: bairroinfo, numeroinfo: numeroinfo, complemento: complemento });
    }} >
    <Text style={styles.login}>Continuar</Text>
   </RectButton>

  </View >


 );
}