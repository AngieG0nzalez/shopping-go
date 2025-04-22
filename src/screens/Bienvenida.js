import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from "../styles/globalStyles";

export default function Bienvenida({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>ShoppingGo</Text>
      <Text style={styles.subtitle}>Tu experiencia de compra comienza aquí. ¡Explora y encuentra lo que necesitas!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Vamos a empezar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginRow} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>Registrar una cuenta</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>
    </View>
  );
}
