import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from '../styles/globalStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log("🚀 ~ login ~ password:", password)
    console.log("🚀 ~ login ~ email:", email)
    if (!email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      alert('Error Todos los campos son obligatorios');
      return;
    }

    const emailValido = email.includes('@') && email.includes('.');
    const passwordValida = password.length >= 6;

    if (!emailValido) {
      Alert.alert('Error', 'El correo electrónico no es válido');
      alert('Error El correo electrónico no es válido');
      return;
    }

    if (!passwordValida) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      alert('Error La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Simulación de login exitoso
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <Button title="Ingresar" onPress={login} />
      <Button title="Cancelar" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
};

export default LoginScreen;
