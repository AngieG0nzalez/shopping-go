import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ButtonMenu = ({ navigation }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5 name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
        <FontAwesome5 name="chart-bar" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <FontAwesome5 name="sign-out-alt" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ReviewsScreen")}>
        <FontAwesome5 name="star" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10, // Valor fijo
    backgroundColor: "#ADD8E6",
  },
});

export default ButtonMenu;