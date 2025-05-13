// UnderConstructionScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UnderConstructionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagen centrada desde la carpeta de activos */}
      <Image
        source={require('../assets/img/service.png')}  // Ruta de la imagen
        style={styles.image}
      />
      {/* Mensaje debajo de la imagen */}
      <Text style={styles.message}>Estamos trabajando para ti, ¡Vuelve pronto!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,  // Ajusta el tamaño de la imagen según necesites
    height: 200,
    marginBottom: 20, // Espacio entre la imagen y el mensaje
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default UnderConstructionScreen;
