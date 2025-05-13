import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { ProgressChart } from "react-native-chart-kit";
import ButtonMenu from "../../components/ButtonMenu.js";

const screenWidth = Dimensions.get("window").width;

// Función auxiliar para convertir Hex a RGB
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const ActivityScreen = ({ navigation }) => { // Revise que el ActivityScreen si sea el nombre de la funcion y este bien escrito
  // Datos de ejemplo
  const chartData = {
    labels: ["Clothing", "Lingerie", "Shoes", "Bags"], // Etiquetas
    data: [0.8, 0.75, 0.4, 0.3], // Porcentajes (deben sumar 1)
  };

  const totalSpent = 365.0; // Total gastado
  const categories = [
    { label: "Clothing", value: "$183.00", color: "#4285F4" }, // Los colores de las barras de progreso en el grafico tambien se manejan desde aca
    { label: "Lingerie", value: "$92.00", color: "#34A853" },
    { label: "Shoes", value: "$47.00", color: "#FBBC05" },
    { label: "Bags", value: "$43.00", color: "#EA4335" },
  ];

  const stats = [
    { label: "Ordered", value: 12 },
    { label: "Received", value: 7 },
    { label: "To Receive", value: 5 },
  ];

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: "https://randomuser.me/api/portraits/women/1.jpg",
          }}
        />
        <Text style={styles.headerTitle}>My Activity</Text>
      </View>

      {/* Gráfica circular */}
      <Text style={styles.month}>April</Text>
      <ProgressChart
        data={chartData}
        width={screenWidth * 0.9}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",

          // Nueva funcion para colocar el color por cada barra del gráfico dependiendo de su categoria
          color: (opacity = 1, index = 0) => {
            const baseColor = categories[index] ? categories[index].color : '#000000'; // Obtener un color hex
            const rgb = hexToRgb(baseColor); // Convierte a RGB

            if (rgb) {
              // Devuelve el color en formato rgba, usando la opacidad proporcionada por el gráfico
              // y los valores RGB del color de la categoría.
              return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
            } else {
              // Fallback por si el color no es válido
              return `rgba(0, 0, 0, ${opacity})`;
            }
          },
          propsForBackgroundLines: {
            strokeDasharray: '',
            stroke: '#eee',
          },
        }}
        hideLegend={true}
        style={styles.chart}
      />
      <Text style={styles.totalSpent}>Total: ${totalSpent.toFixed(2)}</Text>

      {/* Categorías */}
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <View
              style={[styles.categoryColor, { backgroundColor: category.color }]}
            />
            <Text style={styles.categoryLabel}>{category.label}</Text>
            <Text style={styles.categoryValue}>{category.value}</Text>
          </View>
        ))}
      </View>

      {/* Estadísticas */}
      <View style={styles.stats}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.stat}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Botón de historial */}
      <TouchableOpacity style={styles.orderHistoryButton}>
        <Text style={styles.orderHistoryButtonText}>Order History</Text>
      </TouchableOpacity>

      {/* Botón de navegación */}
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
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  month: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  chart: {
    marginBottom: 20,
  },
  totalSpent: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  category: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  categoryColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  categoryValue: {
    fontSize: 14,
    color: "#777",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4285F4",
  },
  statLabel: {
    fontSize: 14,
    color: "#555",
  },
  orderHistoryButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  orderHistoryButtonText: {
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
});

export default ActivityScreen;