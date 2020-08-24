import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import firebase from 'firebase'
import { connect } from 'react-redux'

class EmailAndPassword extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  convertTextToLowerCase = () => {
    var text = this.state.defaultText;
    var lowercasetext = text.toLowerCase();//To convert Lower Case
    this.setState({ defaultText: lowercasetext });
  };
  onBottomPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  onLoginSuccess = () => {
    this.props.navigation.navigate('Articles')

    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  render() {
    return (

      <View style={styles.container}>

        <TextInput placeholder="Usuário"
          onPress={this.convertTextToUpperCase}
          placeholderTextColor="#0167C2"
          fontSize={17}
          style={styles.input} value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />


        <TextInput placeholder="Senha"
          placeholderTextColor="#0167C2"
          fontSize={17}

          style={styles.input} value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <RectButton style={[styles.button, styles.buttonprimary]}
          onPress={this.onBottomPress}
        >



          <Text style={styles.login}>Login</Text>
        </RectButton>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <Text style={styles.Texodaview}>Login Inova</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    width: 320,
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,

    top: 10,
    marginBottom: 15,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    height: 50,
    width: '48%',
    backgroundColor: '#0167C2',

    borderRadius: 8,
    marginLeft: 10,
    marginTop: 20,
    top: 100,
    justifyContent: 'space-between',

  },
  login: {
    flexDirection: 'row',
    color: '#FFF',
    fontSize: 25,
    marginLeft: 66,
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',

  },
  buttonPrimary: {
    backgroundColor: '#9871f5'
  },

  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
    top: -80,

  },
  Texodaview: {
    top: -350,
    fontSize: 40,
    color: '#0167C2',
    fontFamily: 'Poppins_600SemiBold',
  }
})

export default EmailAndPassword;
