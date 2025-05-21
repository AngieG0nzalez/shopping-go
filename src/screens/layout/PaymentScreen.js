import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonMenu from "../../components/ButtonMenu.js";

const PaymentScreen = ({ navigation }) => {
  const [selectedShipping, setSelectedShipping] = useState("Standard");
  const [paymentMethod, setPaymentMethod] = useState("TARJETA DÉBITO/CRÉDITO"); // Método de pago predeterminado
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el mensaje de agradecimiento

  const items = [
    {
      id: "1",
      name: "Red Dress",
      price: 15.0,
      image: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Dress",
    },
    {
      id: "2",
      name: "Blue Shirt",
      price: 14.0,
      image: "https://via.placeholder.com/50/0000FF/FFFFFF?text=Shirt",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesome5 name="times-circle" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );

  const handlePayment = () => {
    // Mostrar el mensaje de agradecimiento
    setShowModal(true);

    // Ocultar el mensaje después de 2 segundos y regresar al menú principal
    setTimeout(() => {
      setShowModal(false);
      navigation.navigate("Home"); // Cambia "Home" por el nombre de tu pantalla principal
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Modal para el mensaje de agradecimiento */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>GRACIAS POR SU COMPRA</Text>
          </View>
        </View>
      </Modal>

      {/* Encabezado */}
      <Text style={styles.header}>PASARELA DE PAGOS</Text>

      {/* Dirección de envío */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Direccion</Text>
        <View style={styles.row}>
          <Text style={styles.text}>
            El danubio, Calle 123, Bogotá, Colombia
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UnderConstruction");
            }}
          >
            <FontAwesome5 name="edit" size={18} color="#4285F4" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Información de contacto */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Imformacion de contacto</Text>
        <View style={styles.row}>
          <Text style={styles.text}>+573237654321</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UnderConstruction");
            }}
          >
            <FontAwesome5 name="edit" size={18} color="#4285F4" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de artículos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.itemList}
        />
      </View>

      {/* Opciones de envío */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opciones de envios</Text>
        <TouchableOpacity
          style={[
            styles.shippingOption,
            selectedShipping === "Standard" && styles.selectedOption,
          ]}
          onPress={() => setSelectedShipping("Standard")}
        >
          <Text style={styles.shippingText}>Normal</Text>
          <Text style={styles.shippingDetails}>5-7 dias</Text>
          <Text style={styles.shippingPrice}>Gratis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.shippingOption,
            selectedShipping === "Express" && styles.selectedOption,
          ]}
          onPress={() => setSelectedShipping("Express")}
        >
          <Text style={styles.shippingText}>Express</Text>
          <Text style={styles.shippingDetails}>1-2 dias</Text>
          <Text style={styles.shippingPrice}>$12.000</Text>
        </TouchableOpacity>
      </View>

      {/* Método de pago */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Metodo de pago</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item
            label="TARJETA DÉBITO/CRÉDITO"
            value="TARJETA DÉBITO/CRÉDITO"
          />
          <Picker.Item label="EFECTIVO" value="EFECTIVO" />
          <Picker.Item label="TRANSACCIÓN" value="TRANSACCIÓN" />
        </Picker>
      </View>

      {/* Total y botón de pago */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: $34.0000</Text>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>

      {/* Menú inferior fijo */}
      <View style={styles.fixedBottomMenu}>
        <ButtonMenu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingBottom: 80, // Espacio para el menú inferior
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#555",
    flex: 1,
    marginRight: 10,
  },
  itemList: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  itemText: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
  },
  shippingOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: "#4285F4",
    borderWidth: 2,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shippingDetails: {
    fontSize: 14,
    color: "#555",
  },
  shippingPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4285F4",
  },
  picker: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  fixedBottomMenu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ADD8E6",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default PaymentScreen;
