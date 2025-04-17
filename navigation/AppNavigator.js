import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Hello from '../screens/Hello';
import Ready from '../screens/Ready';
import Shop from '../screens/Shop';
import My_Activity from '../screens/My_Activity';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Hello" component={Hello} />
      <Stack.Screen name="Ready" component={Ready} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="My_Activity" component={My_Activity} />
    </Stack.Navigator>
  );
}

export default AppNavigator;