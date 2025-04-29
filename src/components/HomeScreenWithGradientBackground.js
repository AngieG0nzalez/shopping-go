import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreenWithGradientBackground = () => {
  return (
    <LinearGradient
      colors={['#ADD8E6', '#87CEEB', '#6495ED']} // LightBlue, SkyBlue, CornflowerBlue
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Explora un mundo de posibilidades.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
});

export default HomeScreenWithGradientBackground;