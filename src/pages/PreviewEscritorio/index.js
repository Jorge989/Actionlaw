import React from 'react';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import Addfoto from '../../../assets/icons/addfoto3.png'
export default function Login({ navigation }) {

 const [selectedImage, setSelectedImage] = React.useState(null);
 let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
   alert("Permission to access camera roll is required!");
   return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) {
   return;
  }

  setSelectedImage({ localUri: pickerResult.uri });
 };

 if (selectedImage !== null) {
  return (
   <View style={styles.container}>
    <Image
     source={{ uri: selectedImage.localUri }}
     style={styles.thumbnail}
    />
   </View>
  );
 }




 return (
  <View style={styles.container}>
   <Text style={styles.Texodaview}>INOVA</Text>




  </View >


 );
}