import React, { useState, State } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, ActivityIndicator, TextInput, Button, Image, TouchableHighlight, StyleSheet, AppRegistry } from 'react-native';
import styles from './styles';
import { Provider } from 'react-native'
import storeConfig from '../../store/storeConfig'
import { connect } from 'react-redux'

import GoogleButton from '../../../assets/icons/google.png'
import { Ionicons } from '@expo/vector-icons';
import Google from './Google'
import firebase from 'firebase'

export default function LoginHome({ navigation }) {


 const store = storeConfig()
 const Redux = () => (
  <Provider sotre={store}>

  </Provider>
 )
 AppRegistry.registerComponent(() => Redux)

 return (
  <View style={styles.container}>
   <ActivityIndicator size="large" />
   <Text style={styles.Texodaview}>Login Inova</Text>

   < RectButton style={[styles.button, styles.buttonprimary]}
    onPress={() => navigation.navigate('googlelog')} >
    <Text style={styles.login}>Login</Text>
   </RectButton>
   < RectButton style={[styles.googlebutton, styles.buttonprimary]}

    onPress={() => navigation.navigate('Login2')} >
    <Google style={styles.google} />
    <Text style={styles.googletext}>{''}Sing in with Google{''}</Text>
   </RectButton>
  </View>
 )
}

