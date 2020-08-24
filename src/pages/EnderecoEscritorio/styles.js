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
  marginTop: 0,
  top: -10,
  justifyContent: 'space-between',

 },
 input: {
  height: 54,

  backgroundColor: '#FFF',
  borderRadius: 8,
  justifyContent: 'center',
  paddingHorizontal: 16,
  marginTop: 4,
  marginBottom: 20,
  top: -50,

 },

 buttonPrimary: {
  backgroundColor: '#9871f5'
 },

 login: {
  flexDirection: 'row',
  color: '#FFF',
  fontSize: 20,
  marginLeft: 40,
  marginTop: 9,
  fontFamily: 'Poppins_400Regular',

 },
 Texodaview: {
  color: '#0256A1',
  fontFamily: 'Poppins_600SemiBold',
  fontSize: 25,
  marginLeft: 60,
  marginBottom: 100,
 },



});

export default styles;