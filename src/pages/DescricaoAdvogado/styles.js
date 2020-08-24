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
  top: -60,
  justifyContent: 'space-between',

 },
 input: {
  height: 330,
  textAlignVertical: "top",

  width: '95%',
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#00BCD4',
  borderRadius: 8,
  marginLeft: 7,
  justifyContent: 'center',
  paddingHorizontal: 15,
  paddingVertical: 15,
  marginTop: 4,
  marginBottom: 20,
  top: -130,

 },

 buttonPrimary: {
  backgroundColor: '#9871f5',
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
  fontSize: 20,
  marginLeft: 70,
  marginBottom: 180,
  top: 30,
 },



});

export default styles;