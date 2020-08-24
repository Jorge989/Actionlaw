import React, { useState, useEffect, Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
export default function Artigos({ navigation, route }) {
 const router = useNavigation()

 async function handleLogout() {
  await firebase.auth().signOut();
  this.props.navigation.navigate('Login')
 }

 const email = firebase.auth().currentUser.email
 return (
  <View style={styles.container}>
   <View style={styles.articleContainer}>
    <Text style={styles.heading}>
     Bem-Vindo
    </Text>


    <TouchableOpacity style={styles.logout2} onPress={() => {
     handleLogout();
     navigation.navigate('Login')
    }}>


     <Text style={styles.logout}>Logout</Text>
    </TouchableOpacity>
    <Text style={styles.email}>{email}</Text>
    < RectButton style={[styles.button, styles.buttonprimary]}
     onPress={() => {

      navigation.navigate('RegistroEscritorio');
     }} >
     <Text style={styles.login}>Continuar</Text>
    </RectButton>
   </View>
  </View>
 );

};



const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',

 },

 content: {
  fontSize: 26,
  marginTop: -10,
  padding: 10,
  color: 'black'
 },
 button: {
  height: 50,
  width: '48%',
  backgroundColor: '#0167C2',

  borderRadius: 8,
  marginLeft: 100,
  marginTop: 20,
  top: 40,
  justifyContent: 'space-between',
 },
 login: {
  flexDirection: 'row',
  color: '#FFF',
  fontSize: 20,
  marginLeft: 45,
  marginTop: 9,
  fontFamily: 'Poppins_400Regular',
 },
 heading: {
  fontSize: 40,
  color: 'black',
  marginLeft: 60,
  marginTop: 170,
  letterSpacing: 3.0,
  padding: 10,
  fontFamily: 'Poppins_400Regular',
  color: '#0167C2',
 },
 email: {
  fontSize: 30,
  marginLeft: 70,
  color: 'black',
  marginTop: -60,

  color: '#0167C2',
 },
 articleContainer: {
  padding: 10,
  top: -250,

 },
 logout: {
  flexDirection: 'row',
  color: '#FFF',
  fontSize: 20,
  marginLeft: 60,
  marginTop: 9,
  fontFamily: 'Poppins_400Regular',
 },
 logout2: {
  backgroundColor: 'pink',
  height: 50,
  width: '48%',
  backgroundColor: '#0167C2',

  borderRadius: 8,
  marginLeft: 100,
  marginTop: 20,
  top: 200,
  justifyContent: 'space-between',
 }

})
