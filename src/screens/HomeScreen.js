// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import globalStyles from "../styles/globalStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.homeContainer}>
      <View style={globalStyles.homeCard}>
        <Image
          source={{ uri: 'https://img.freepik.com/foto-gratis/mujer-joven-bolsa-compras-tarjeta_144627-5528.jpg' }}
          style={globalStyles.homeImage}
        />
        <View style={globalStyles.homeTextContent}>
          <Text style={globalStyles.homeTitle}>Hello</Text>
          <Text style={globalStyles.homeDescription}>
          ¡Hola 👋 Nos alegra tenerte aquí. Descubre productos increíbles pensados para ti 🛍️
          </Text>
        </View>
      </View>

      <View style={globalStyles.pagination}>
        <View style={[globalStyles.dot, globalStyles.activeDot]} />
        <View style={globalStyles.dot} />
        <View style={globalStyles.dot} />
        <View style={globalStyles.dot} />
      </View>
    </View>
  );
};

export default HomeScreen;
