import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../styles/globalStyles";

export default function Bienvenida({ navigation }) {
  return (
    <View style={styles.containerContent}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>ShoppingGo</Text>
      <Text style={styles.subtitle}>Tu experiencia de compra comienza aquí. ¡Explora y encuentra lo que necesitas!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Vamos a empezar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginRow} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>Registrar una cuenta</Text>
        <AntDesign style={styles.welcomeIcon} name="rightcircle" size={16} color="#004CFF" />
      </TouchableOpacity>
    </View>
  );
}
