// src/navigation/AppNavigator.js
import React, { useContext } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Bienvenida from "../screens/Bienvenida";
import RegisterScreen from "../screens/auth/RegisterScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LayoutScreen from '../screens/layout/LayoutScreen';
import ActivityScreen from '../screens/layout/ActivityScreen';
import PaymentScreen from "../screens/layout/PaymentScreen";
import UnderConstructionScreen from "../screens/UnderConstructionScreen";

import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#004CFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Layout" component={LayoutScreen} />
            <Stack.Screen name="Activity" component={ActivityScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="UnderConstruction" component={UnderConstructionScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Bienvenida} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default AppNavigator;
