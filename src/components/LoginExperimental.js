import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const LogoPngLogin = '../assets/static/LogoPngLogin.png'

export default () => {
  return (
    <View style={stylesLogin.view}>
      <Image source={require(LogoPngLogin)}/>
      <View style={stylesLogin.loginView}>
        <View style={stylesLogin.inputView}>
          <Icon name="user" size={25} style={stylesLogin.inputIcon}/>
          <TextInput
            placeholder="Nome do Usuário"
            placeholderTextColor={'#FF824A'}
            maxLength={40}
            style={stylesLogin.inputText}
          />
        </View>
        <View style={stylesLogin.inputView}>
          <Icon name="lock" size={25} style={stylesLogin.inputIcon}/>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={'#FF824A'}
            secureTextEntry
            maxLength={40}
            style={stylesLogin.inputText}
          />
        </View>
      </View>
      <Pressable style={stylesLogin.button}>
        <Text style={stylesLogin.buttonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const stylesLogin = StyleSheet.create({
  view: {
    height: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ddd',
  },
  button: {
    width: "85%",
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 12,
    paddingHorizontal: 32,

    borderRadius: 16,
    borderWidth: 1,
    elevation: 3,

    color: "#FF824A",
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    color: '#FF824A',
  },
  loginView: {
    width: "90%"
  },
  inputView: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 15,

    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#797979",
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginHorizontal: 10,
    color: '#FF824A',
  },
  inputText: {
    fontSize: 16,
    color: '#FF824A',
  },
});
