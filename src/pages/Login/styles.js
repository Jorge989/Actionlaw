import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

 container: {
  flex: 1,
  justifyContent: 'center',
  padding: 20,

 },

 button: {
  height: 50,
  width: '48%',
  backgroundColor: '#0167C2',
  borderRadius: 8,
  marginLeft: 100,
  marginTop: 170,
  justifyContent: 'space-between',

 },


 buttonPrimary: {
  backgroundColor: '#9871f5'
 },

 login: {
  flexDirection: 'row',
  color: '#FFF',
  fontSize: 25,
  marginLeft: 55,
  marginTop: 5,
  fontFamily: 'Poppins_400Regular',

 },
 Texodaview: {
  color: '#0256A1',
  fontFamily: 'Poppins_600SemiBold',
  fontSize: 50,
  marginLeft: 40,
  marginBottom: 100,
 },
 googletext: {
  fontFamily: 'Poppins_400Regular',
  fontSize: 19,
  color: '#0167C2',
 },
 googlebutton: {
  flexDirection: 'row',
  top: 40,
  marginLeft: 80,

 },
 google: {
  top: 6,

 }




});

export default styles;