import React from 'react';
import Onboard from './pages/Login';
import Login2 from './pages/Logins2'
import Articles from './pages/Logins2/Artigos'
import EmailAndPassword from './pages/Logins2/EmailAndPassword'
import RegistroEscritorio from './pages/RegistreEscritorio'
import EnderecoEscritorio from './pages/EnderecoEscritorio'
import DescricaoEscritorio from './pages/DescricaoEscritorio'
import ImagemEscritorio from './pages/ImagemEscritorio'
import PreviewEscritorio from './pages/PreviewEscritorio'
import RegistroAdvogado from './pages/RegistroAdvogado'
import DescricaoAdvogado from './pages/DescricaoAdvogado'
import ListaAdvogado from './pages/ListaAdvogado'


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={EmailAndPassword} options={{ headerShown: true }} />
        <Stack.Screen name="ImagemEscritorio" component={ImagemEscritorio} />
        <Stack.Screen name="Articles" component={Articles} options={{ headerShown: true }} />
        <Stack.Screen name="RegistroEscritorio" component={RegistroEscritorio} />
        <Stack.Screen name="EnderecoEscritorio" component={EnderecoEscritorio} />
        <Stack.Screen name="DescricaoEscritorio" component={DescricaoEscritorio} />
        <Stack.Screen name="PreviewEscritorio" component={PreviewEscritorio} />
        <Stack.Screen name="RegistroAdvogado" component={RegistroAdvogado} />
        <Stack.Screen name="ListaAdvogado" component={ListaAdvogado} options={{ headerShown: false }} />
        <Stack.Screen name="DescricaoAdvogado" component={DescricaoAdvogado} />

        {/*} <Stack.Screen name="ConfirmarAdvogado" component={ConfirmarAdvogado} />
        <Stack.Screen name="AtivarFuncionalidades" component={AtivarFuncionalidades} />
        <Stack.Screen name="TemasApp" component={TemasApp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}