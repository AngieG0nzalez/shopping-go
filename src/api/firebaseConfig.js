// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ⚠️ Reemplaza los valores de abajo con los datos de tu proyecto Firebase:
const firebaseConfig = {
  apiKey: "AIzaSyDiYd2Qt0Fs3xUzt3KZ10nLvotkTiusU4g",
  authDomain: "shoppinggoapp.firebaseapp.com",
  projectId: "shoppinggoapp",
  storageBucket: "shoppinggoapp.firebasestorage.app",
  messagingSenderId: "786262240052",
  appId: "1:786262240052:web:593af5fc2ecda2914f5361"
};

const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
