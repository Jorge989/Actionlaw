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
  marginTop: 20,
  top: 40,
  justifyContent: 'space-between',

 },

 buttonPrimary: {
  backgroundColor: '#9871f5'
 },

 login: {
  flexDirection: 'row',
  color: '#FFF',
  fontSize: 25,
  marginLeft: 50,
  marginTop: 5,
  fontFamily: 'Poppins_400Regular',

 },
 Texodaview: {
  color: '#0256A1',
  fontFamily: 'Poppins_600SemiBold',
  fontSize: 50,
  marginLeft: 80,
  marginBottom: 20,
 },
 input: {
  height: 54,
  backgroundColor: '#FFF',
  borderRadius: 8,
  justifyContent: 'center',
  paddingHorizontal: 16,
  marginTop: 4,
  top: 30,
  marginBottom: 15,

 },
 buttonradius: {
  height: 30,
  width: '8%',
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#00BCD4',
  borderRadius: 8,
  marginLeft: 100,
  marginTop: 20,
  top: 100,
  justifyContent: 'space-between',
 },
 lembreme: {
  color: '#0167C2',
  marginLeft: 140,
  fontSize: 16,
  top: 75,
  fontFamily: 'Poppins_400Regular',
 },
 esqueceu: {
  color: '#0167C2',
  marginLeft: 90,
  fontSize: 19,
  top: -5,
  fontFamily: 'Poppins_400Regular',
 },
 esqueceubutton: {
  height: 30,
  width: '90%',
  borderRadius: 8,
  marginLeft: -20,
  marginTop: 25,
  top: 40,
  justifyContent: 'space-between',
 },
 google: {
  top: -20,

  width: 100,
  height: 30,
  marginLeft: 100,
 },
 googletext: {
  color: '#0167C2',
  marginLeft: 20

  ,
  fontSize: 16,
  marginBottom: 4,
  width: 150,
  fontFamily: 'Poppins_400Regular',
 },
 googleimage: {
  top: 18,
  marginLeft: -13,
 },
 siginout: {
  top: 100,


 }

});

export default styles;