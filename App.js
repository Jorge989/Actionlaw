import React from 'react';
import Routes from './src/routes';
import { NavigationNativeContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import './Fire'


import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

export default function navinext() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (

    <Routes />

  );
}
