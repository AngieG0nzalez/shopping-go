// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bienvenida from '../screens/Bienvenida';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LayoutScreen from '../screens/LayoutScreen';
import Shop from '../screens/Shop';
import ReviewsScreen from '../screens/ReviewsScreen';
import ActivityScreen from '../screens/ActivityScreen'; // Asegúrate de que la ruta sea correcta


const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Bienvenida} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Layout" component={LayoutScreen} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
