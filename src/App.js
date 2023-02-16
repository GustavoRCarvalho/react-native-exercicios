import React from 'react';
import Primeiro from './components/Primeiro';
import {Text, View} from 'react-native';
import LoginExperimental from './components/LoginExperimental';

export default () => {
  return (
    <View>
      <Primeiro />
      <LoginExperimental />
    </View>
  );
};
