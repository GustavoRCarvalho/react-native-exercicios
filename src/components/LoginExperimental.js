import React, { useRef, useState } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const LogoLogin = '../assets/static/LogoLogin.png'
const backgroundLogin = '../assets/static/BackgroundLogin.png'

export default () => {
  const [login, setLogin] = useState({})

  function handleLoginSubmit() {
    console.warn("Login", login)
  }

  function handleLoginInput(event, type) {
    setLogin((e) => {return {...e, [type]: event.nativeEvent.text}})
  }

  return (
    <ImageBackground source={require(backgroundLogin)} resizeMode="cover" imageStyle={stylesLogin.imageBackground}>
      <View style={stylesLogin.view}>
        <Image source={require(LogoLogin)}/>
        <View style={stylesLogin.loginView}>
          <View style={stylesLogin.inputView}>
            <Icon name="user" size={25} style={stylesLogin.inputIcon}/>
            <TextInput
              value={login.user}
              onChange={event => handleLoginInput(event, "user")}
              placeholder="Nome do Usuário"
              placeholderTextColor={'#FF824A'}
              onSubmitEditing={()=>this.passwordRef.focus()}
              maxLength={40}
              style={stylesLogin.inputText}
            />
          </View>
          <View style={stylesLogin.inputView}>
            <Icon name="lock" size={25} style={stylesLogin.inputIcon}/>
            <TextInput
              value={login.password}
              onChange={event => handleLoginInput(event, "password")}
              placeholder="Senha"
              placeholderTextColor={'#FF824A'}
              secureTextEntry
              maxLength={40}
              ref={passwordRef => (this.passwordRef = passwordRef)}
              onSubmitEditing={handleLoginSubmit}
              style={stylesLogin.inputText}
            />
          </View>
        </View>
        <Pressable style={stylesLogin.button} onPress={handleLoginSubmit}>
          <Text style={stylesLogin.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const stylesLogin = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageBackground: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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
    width: "90%",
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
    maxWidth: "80%",
    fontSize: 16,
    color: '#FF824A',
  },
});
