import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth, db, storage } from '../../api/firebaseConfig.js';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'react-native-image-picker';
import styles from '../../styles/globalStyles.js';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [image, setImage] = useState(null);

  // Validaciones básicas del formulario
  const validate = () => {
    if (!email.includes('@')) return Alert.alert('Email inválido');
    if (password.length < 6)
      return Alert.alert('La contraseña debe tener mínimo 6 caracteres');
    if (password !== confirmPass)
      return Alert.alert('Las contraseñas no coinciden');
    if (!name || !number)
      return Alert.alert('Todos los campos son obligatorios');
    return true;
  };

  // Selector de imagen (opcional)
  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (
        !response.didCancel &&
        !response.errorCode &&
        response.assets.length > 0
      ) {
        setImage(response.assets[0]);
      }
    });
  };

  // Subir imagen al storage de Firebase (si hay imagen)
  const uploadImage = async (uid) => {
    if (!image) {
      console.log('No se seleccionó imagen, se omite la subida.');
      return null;
    }

    const response = await fetch(image.uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `profilePictures/${uid}.jpg`);
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  };

  // Lógica completa de registro
  const register = async () => {
    if (!validate()) return;

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCred.user;

      //await sendEmailVerification(user); // Descomentar si deseas enviar un correo de verificación

      const photoURL = await uploadImage(user.uid);

      const userData = {
        uid: user.uid,
        name: name.trim(),
        number: number.trim(),
        email: email.trim().toLowerCase(),
        photoURL: photoURL || null,
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'users', user.uid), userData);

      Alert.alert(
        'Registro exitoso',
        'Se ha enviado un correo de verificación. Por favor, verifica tu email para iniciar sesión.'
      );

      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Error en el registro:', error);

      let msg = 'Ha ocurrido un error.';
      if (error.code === 'auth/email-already-in-use') {
        msg = 'El correo ya está registrado.';
      } else if (error.code === 'auth/invalid-email') {
        msg = 'Correo inválido.';
      } else if (error.code === 'auth/weak-password') {
        msg = 'La contraseña es muy débil.';
      }

      Alert.alert('Error', msg);
    }
  };

  return (
    <View style={styles.containerRegister}>
      <TouchableOpacity
        style={styles.imageContainerRegister}
        onPress={pickImage}
      >
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholderRegister}>📷 (opcional)</Text>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Nombre completo"
        onChangeText={setName}
        value={name}
        style={styles.inputRegister}
      />
      <TextInput
        placeholder="Número"
        onChangeText={setNumber}
        value={number}
        keyboardType="phone-pad"
        style={styles.inputRegister}
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.inputRegister}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.inputRegister}
      />
      <TextInput
        placeholder="Confirmar contraseña"
        secureTextEntry
        onChangeText={setConfirmPass}
        value={confirmPass}
        style={styles.inputRegister}
      />

      <Button title="Registrarse" onPress={register} />
      <Button title="Cancelar" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
};

export default RegisterScreen;