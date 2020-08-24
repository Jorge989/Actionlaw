
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

import Articles from '../Logins2/Artigos'
import EmailAndPassword from '../Logins2/EmailAndPassword'

import LoginHome from './Login'
import LoginForm from '../Logins2/LoginForm'
import firebase2 from '../../../Fire'

class Login extends React.Component {
  state = {
    loggedIn: null
  }

  componentDidMount() {
    firebase2.auth().onAuthStateChanged(user => {
      if (user) {
        this.seState({
          loggedIn: true
        })
      } else {
        this.seState({
          loggedIn: false
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loggedIn ? <Articles /> : <EmailAndPassword />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});


export default Login;





