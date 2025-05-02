import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import ButtonMenu from "../components/ButtonMenu.js";

const reviews = [
  {
    id: "1",
    name: "Juan Pérez",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment: "La calidad de la ropa es excelente, muy satisfecho con mi compra.",
  },
  {
    id: "2",
    name: "María Gómez",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    comment: "Los zapatos son cómodos, pero tardaron en llegar.",
  },
  {
    id: "3",
    name: "Carlos López",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 2,
    comment: "La talla no coincide con la descripción, no estoy contento.",
  },
  {
    id: "4",
    name: "Ana Martínez",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    comment: "¡Me encantaron los diseños! Definitivamente volveré a comprar.",
  },
  {
    id: "5",
    name: "Luis Torres",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 3,
    comment: "El material es bueno, pero el precio es un poco alto.",
  },
  {
    id: "6",
    name: "Sofía Ramírez",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 4,
    comment: "Buena relación calidad-precio, lo recomiendo.",
  },
  {
    id: "7",
    name: "Pedro Sánchez",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 1,
    comment: "El producto llegó dañado, no lo recomiendo.",
  },
  {
    id: "8",
    name: "Laura Fernández",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    comment: "Todo perfecto, el envío fue rápido y el producto es de calidad.",
  },
  {
    id: "9",
    name: "Diego Castro",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 4,
    comment: "Los zapatos son muy cómodos, pero el color no era el esperado.",
  },
  {
    id: "10",
    name: "Camila Ortiz",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
    comment: "¡Increíble! Superó mis expectativas.",
  },
];

const ReviewsScreen = ({ navigation }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FontAwesome
        key={index}
        name={index < rating ? "star" : "star-o"}
        size={16}
        color="#FFD700"
      />
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Avatar
        rounded
        source={{ uri: item.avatar }}
        size="medium"
        containerStyle={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.stars}>{renderStars(item.rating)}</View>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Lista de reseñas con scroll */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      {/* Menú inferior fijo */}
      <View style={styles.fixedBottomMenu}>
        <ButtonMenu navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 10,
    paddingBottom: 80, // Espacio adicional para evitar que la lista se superponga con el menú
  },
  fixedBottomMenu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ADD8E6", // Fondo azul claro
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  reviewContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 5,
  },
  comment: {
    fontSize: 14,
    color: "#555",
  },
});

export default ReviewsScreen;