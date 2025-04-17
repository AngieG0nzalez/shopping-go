import React from 'react';
import { FcOldTimeCamera } from "react-icons/fc";
import globalStyles from "../styles/globalStyles";
import { View, Text,TextInput, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={globalStyles.container}>
      <Text>Welcome to Shopping-go!</Text>
    </View>,
    <View style={globalStyles.header}>
      <Text style={globalStyles.shopTitle}>Shop</Text>
      <TextInput
        style={globalStyles.searchInput}
        placeholder="Search"      

        placeholderTextColor="#999"
      
        
      />
    </View>
  );
}

