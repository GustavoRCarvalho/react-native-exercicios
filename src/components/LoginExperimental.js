import React from 'react';
import {View, Text, TextInput, StyleSheet, Icon} from 'react-native';

export default () => {
  return (
    <View style={stylesLogin.view}>
      <View style={stylesLogin.inputView}>
        {/* <Icon /> */}
        <TextInput
          placeholder="Nome do Usuário"
          placeholderTextColor={'#FF824A'}
          maxLength={40}
          style={stylesLogin.input}
        />
      </View>
      <View style={stylesLogin.inputView}>
        <TextInput
          placeholder="*****************"
          placeholderTextColor={'#FF824A'}
          maxLength={40}
          style={stylesLogin.input}
        />
      </View>
    </View>
  );
};

const stylesLogin = StyleSheet.create({
  view: {
    height: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 18,
    color: '#FF824A',
  },
});
