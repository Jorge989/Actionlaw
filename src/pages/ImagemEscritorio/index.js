import React, { useState, useRef, useEffect } from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, Alert, Modal, TextInput, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import styles from './styles';
import { Provider } from 'react-redux'
import storeConfig from '../../../src/store/storeConfig'
import { Modalize } from 'react-native-modalize'
import * as ImagePicker from 'expo-image-picker';
import OKimage from '../../../assets/icons/ok.png';
import Addfoto from '../../../assets/icons/addfoto3.png'



import 'firebase/firestore'



export default function Login({ navigation }) {
   const CurryImagePicker = ({ image, onImagePicked }) => {

      pickImageHandler = () => {
         ImagePicker.shownImagePicker({ title: 'Pick as Image', maxWidth: 800, maxHeight: 600 },
            response => {
               if (response.error) {
                  console.log("image error");
               } else {
                  console.log("Image: " + response.uri)
                  onImagePicked({ uri: response.uri })
               }
            }
         )
      }
   }






   return (


      //openImagePickerAsync
      <View style={styles.container}>

         <Text style={styles.Texodaview}>Imagem do escritório</Text>
         <TouchableOpacity style={[styles.button2, styles.buttonprimary2]}
            onPress={this.pickImageHandler}>
            <Image source={Addfoto} />
         </TouchableOpacity>
         <Text style={styles.Texodaview2}>
            Escolha uma Imagem
    </Text>

         < TouchableOpacity style={[styles.buttonPre, styles.buttonprimaryPre]}
            onPress={() => navigation.navigate('PostScrenn')} >
            <Text style={styles.loginPre}>Pré-Visualizar</Text>
         </TouchableOpacity>


         < RectButton style={[styles.button, styles.buttonprimary]}
         // onPress={onOpen}
         >
            <Text style={styles.login}>Continuar</Text>
         </RectButton>


         <Modalize
            ref={modalizRef}
            snapPoint={500}
            transparent={true}
            visible={modalVisible}
         >
            <Image source={OKimage} style={styles.OKimage} />
            <Text style={styles.cadastrotext}>Cadastro do escritório</Text>
            <Text style={styles.cadastrotext2}>Está correto?</Text>
            <View
               style={styles.viewdomodal

               }>

               <TouchableOpacity style={styles.botao1}
                  onPress={() => navigation.navigate('RegistroAdvogado')}>
                  <Text style={styles.modaltext}>Sim</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.botao2}
                  onPress={() => navigation.navigate('ImagemEscritorio')}>

                  <Text style={styles.modaltext}>Não</Text>
               </TouchableOpacity>

            </View>
         </Modalize >
      </View >


   );
}

