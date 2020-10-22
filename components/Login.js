import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example


const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },

  inputForm:{
    width: '100%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(0, 209, 175)',
    marginBottom: 15
  },
  btnLogin:{
    backgroundColor: 'rgb(0, 209, 175)',
    width: 100,
    height: 40,
    color: 'white'
  }

})


const Login = () =>(
      <View style={styles.container}>

        <TextInput 
          style={styles.inputForm}
          placeholder= 'Nhập tài khoản'
          placeholderTextColor= '#cccccc'
        />
        <TextInput 
          style={styles.inputForm}
          placeholder= 'Nhập mật khẩu'
          placeholderTextColor= '#cccccc'
          secureTextEntry={true}
        />
        <Button 
          title='Đăng nhập'
          style={styles.btnLogin}
        />

        
      </View>


);
  

export default Login
