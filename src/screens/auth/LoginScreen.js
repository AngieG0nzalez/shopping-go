// src/screens/auth/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/globalStyles";
import HomeScreenWithGradientBackground from "../../components/HomeScreenWithGradientBackground";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validate = () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo electrónico no es válido");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Bienvenido", "Inicio de sesión exitoso");
      // No navegamos manualmente a "Home". El contexto se actualiza automáticamente.
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "Error al iniciar sesión";
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuario no encontrado";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Contraseña incorrecta";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Email inválido";
      }
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <HomeScreenWithGradientBackground />
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer}>
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="gray" />
        </TouchableOpacity>
        <View style={styles.buttonLoginContainer}>
          <Button title="Ingresar" onPress={handleLogin} color="#004CFF" />
        </View>
        <TouchableOpacity
          style={styles.loginRow}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.loginText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
