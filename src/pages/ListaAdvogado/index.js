import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import firebase from '../../../Fire'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';
import Contact from './contact'
export default function Index({ navigation, route }) {


 const [nome, setNome] = useState(null);
 const [email, setEmail] = useState(null);
 const [listFire, setListFire] = useState([]);


 function componentDidMount() {
  fetch(nome, email)
   .then(response => response.json())
   .then(nome => this.setState({ nome: nome }))
 }





 useEffect(() => {
  try {
   firebase.database().ref('/crud').on('value', (snapshot) => {
    const list = [];
    snapshot.forEach((childItem) => {
     list.push({
      key: childItem.key,
      email: childItem.val().email,
      nome: childItem.val().nome,
     });
    });
    setListFire(list);
   })

  } catch (error) {
   alert(error);
  }
 }, [])


 function delFire(key) {
  firebase.database().ref('/crud/' + key).remove()
 }

 function editFire(key, nome, email) {
  navigation.navigate("RegistroAdvogado", {
   key: key,
   nome: nome,
   email: email,
   allUsers: email, nome,
   usersFiltered: allUsers
  });
 }

 function createFire() {
  try {
   firebase.database().ref('/crud').push({
    nome: nome,
    email: email
   })

  } catch (error) {
   alert(error);
  }
  finally {
   setEmail('');
   setNome('');
  }
 }


 return (
  <View style={styles.container}>
   < RectButton style={styles.Adicionarbutton}

    onPress={() => navigation.navigate('Login2')} >
    <Contact style={styles.contact} />
    <Text style={styles.Adicionar}>{''}+ Adicionar{''}</Text>
   </RectButton>
   <Text style={styles.advogados}>{''}Advogados{''}</Text>
   <TextInput style={styles.filtro}
    placeholder="Filtro"
    type="search"
    //onChangeText={text => {
    // this.searchUser(text);
    //}}
    placeholderTextColor="#FFF"
   >


   </TextInput>
   <FlatList style={styles.viewFlat} data={listFire}
    keyExtractor={(item) => item.key}
    renderItem={({ item }) =>

     <View style={styles.iconFlat}>
      <Text style={styles.nome}>{item.nome} </Text>

      <Text>{route.params.email}</Text>
      <Text style={styles.email}>{item.email}</Text>

      <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.nome, item.email) }}>
       <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEnviar2} onPress={() => { delFire(item.key) }}>
       <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
     </View>

    } />

   <TouchableOpacity style={styles.button} onPress={createFire}>
    <Text style={styles.login}>Finalizar</Text>
   </TouchableOpacity>

  </View>
 );
}

