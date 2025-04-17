import React from 'react';
import globalStyles from '../styles/globalStyles';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>BIENVENIDO</Text>
      <Button title="PANTALLA Register" onPress={() => navigation.navigate('Register')} />
      <Button title="PANTALLA Login" onPress={() => navigation.navigate('Login')} />
      <Button title="PANTALLA Hello" onPress={() => navigation.navigate('Hello')} />
      <Button title="PANTALLA Ready" onPress={() => navigation.navigate('Ready')} />
      <Button title="PANTALLA Shop WLSON" onPress={() => navigation.navigate('Shop')} />
      <Button title="PANTALLA My Activity WILSON" onPress={() => navigation.navigate('My_Activity')} />
    </View>
  );
}

