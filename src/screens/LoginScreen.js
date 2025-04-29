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
import styles from "../styles/globalStyles";
import HomeScreenWithGradientBackground from "../components/HomeScreenWithGradientBackground.js";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = (email, password) => {
    console.log("🚀 ~ login ~ password:", password);
    console.log("🚀 ~ login ~ email:", email);

    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      console.log("Error: Todos los campos son obligatorios");
      return false; // Indica que la validación falló
    }

    // Validación de correo electrónico más robusta con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = emailRegex.test(email);

    // Validación de contraseña con longitud mínima
    const minPasswordLength = 8; // Puedes ajustar la longitud mínima aquí
    const passwordValida = password.length >= minPasswordLength;

    if (!emailValido) {
      Alert.alert("Error", "El correo electrónico no es válido");
      console.log("Error: El correo electrónico no es válido");
      return false; // Indica que la validación falló
    }

    if (!passwordValida) {
      Alert.alert(
        "Error",
        `La contraseña debe tener al menos ${minPasswordLength} caracteres`
      );
      console.log(
        `Error: La contraseña debe tener al menos ${minPasswordLength} caracteres`
      );
      return false; // Indica que la validación falló
    }

    // Si la validación pasa, puedes continuar con la lógica de inicio de sesión
    console.log("Validación exitosa. Iniciando sesión...");
    // Aquí iría tu lógica para autenticar al usuario (llamada a API, etc.)
    // ...

    return true; // Indica que la validación fue exitosa
  };

  const handleLogin = () => {
    navigation.navigate("Home");
    const isValid = login(email, password);
    if (isValid) {
      // Aquí tu lógica para enviar los datos de inicio de sesión
      console.log("Inicio de sesión exitoso (simulado)");
      // ...
    } else {
      // La función de validación ya mostró las alertas de error
      console.log("Error de validación");
    }
  };
  return (
    <View style={styles.container}>
      <HomeScreenWithGradientBackground/>
      {/* <BackgroundCircle circleColor="rgba(36, 24, 197, 0.5)" radius={100} xPosition={-50} yPosition={-50} /> */}
      {/* <HomeScreenWithWaveBackground /> */}

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
          secureTextEntry={!showPassword} // Oculta el texto si showPassword es falso
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.iconContainer}
        >
          <Icon
            name={showPassword ? "eye-slash" : "eye"}
            size={20}
            color="gray"
          />
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
