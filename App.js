
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard

} from 'react-native';

import Login from './components/Login'

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
console.disableYellowBox = true;


const DismissKeyboard = ({ children }) => (
<TouchableWithoutFeedback 
  
  onPress={() => Keyboard.dismiss()}> 

  {children}
  </TouchableWithoutFeedback>
);


export default class App extends React.Component {

    render() {
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink'
  },
  header:{
    flex: 0.1,
    backgroundColor: 'rgb(0, 209, 175)'
  },
  loginForm:{
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

    return (
      <KeyboardAvoidingView enabled behavior="padding" style={{flex: 1, backgroundColor: '#fff'}}>

        <View style={styles.header} >
        </View>
          <DismissKeyboard>
        <View style={styles.loginForm} >
          <Login /> 
        </View>
          </DismissKeyboard>
        <StatusBar barStyle="default" />
      </KeyboardAvoidingView>
    )
  }
}
