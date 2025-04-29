import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db, storage } from '../../firebaseConfig.js';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'react-native-image-picker';
import styles from '../styles/globalStyles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [image, setImage] = useState(null);

  const validate = () => {
    if (!email.includes('@')) return Alert.alert('Email inválido');
    if (password.length < 6) return Alert.alert('La contraseña debe tener mínimo 6 caracteres');
    if (password !== confirmPass) return Alert.alert('Las contraseñas no coinciden');
    if (!name || !number) return Alert.alert('Todos los campos son obligatorios');
    return true;
  };
              
  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode && response.assets.length > 0) {
        setImage(response.assets[0]);
      }
    });
  };

  const uploadImage = async (uid) => {
    if (!image) return null;
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `profilePictures/${uid}.jpg`);
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  };

  const register = async () => {
    if (!validate()) return;

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);

      let photoURL = await uploadImage(userCred.user.uid);

      await setDoc(doc(db, 'users', userCred.user.uid), {
        name,
        email,
        number,
        photoURL: photoURL || null,
        createdAt: new Date()
      });

      Alert.alert('Registro exitoso', 'Verifica tu email para continuar');
      navigation.navigate('Welcome');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.containerRegister}>
      <TouchableOpacity style={styles.imageContainerRegister} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholderRegister}>📷</Text>
        )}
      </TouchableOpacity>

      <TextInput placeholder="Nombre completo" onChangeText={setName} value={name} style={styles.inputRegister} />
      <TextInput placeholder="Número" onChangeText={setNumber} value={number} keyboardType="phone-pad" style={styles.inputRegister} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} keyboardType="email-address" style={styles.inputRegister} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} value={password} style={styles.inputRegister} />
      <TextInput placeholder="Confirmar contraseña" secureTextEntry onChangeText={setConfirmPass} value={confirmPass} style={styles.inputRegister} />
      <Button title="Done" onPress={register} />
      <Button title="Cancel" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
};

export default RegisterScreen;
