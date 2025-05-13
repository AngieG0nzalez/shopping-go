import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { AuthContext } from "../context/AuthContext";

const BottomMenu = ({ navigation }) => {
  const { logout } = useContext(AuthContext); // Asegúrate que existe este método

  return (
    <View style={globalStyles.bottomMenu}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name="home" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={logout}>
        <FontAwesome5 name="sign-out-alt" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
