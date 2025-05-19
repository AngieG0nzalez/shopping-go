import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "@react-navigation/elements";
import styles from "../../styles/globalStyles.js";
import api from "../../api/serviceApi.js"; // Asegúrate de tener este archivo configurado
import { useNavigation } from "@react-navigation/native"; // Importamos la navegación

const LayoutScreen = () => {
  const [categories, setCategories] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [justForYou, setJustForYou] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(""); // Nuevo estado para el texto de búsqueda
  const navigation = useNavigation(); // Usamos el hook de navegación

  const fetchData = useCallback(async () => {
    try {
      const [cats, top, newItemsData, justForYouData, flash, popular] =
        await Promise.all([
          api.getByType("mockCategories"),
          api.getByType("mockTopProducts"),
          api.getByType("mockNewItems"),
          api.getByType("mockJustForYou"),
          api.getByType("mockFlashSale"),
          api.getByType("mockMostPopular"),
        ]);

      setCategories(cats);
      setTopProducts(top);
      setNewItems(newItemsData);
      setJustForYou(justForYouData);
      setFlashSale(flash);
      setMostPopular(popular);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Función para filtrar los productos por nombre
  const filterProducts = (products) => {
    if (!searchText) {
      return products;
    }
    const lowerSearchText = searchText.toLowerCase();
    return products.filter(
      (product) =>
        product.name && product.name.toLowerCase().includes(lowerSearchText)
    );
  };

  const SectionTitle = ({ title }) => (
    <View style={styles.sectionHeaderLayout}>
      <Text style={styles.sectionTitleLayout}>{title}</Text>
      <TouchableOpacity onPress={navigateToUnderConstruction}>
        <Text style={styles.seeAllLayout}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  // Función para redirigir a la pantalla "UnderConstruction"
  const navigateToUnderConstruction = (itemId) => {
    console.log("🚀 ~ Navegando desde item:", itemId);

    const validIds = ["tp2", "ni3", "jfy1"];
    const screen = validIds.includes(itemId.id)
      ? "AddProduct"
      : "UnderConstruction";

    navigation.navigate(screen);
  };

  if (loading) {
    return (
      <View
        style={[
          styles.containerLayout,
          { justifyContent: "center", alignItems: "center", flex: 1 },
        ]}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const filteredTopProducts = filterProducts(topProducts);
  const filteredNewItems = filterProducts(newItems);
  const filteredJustForYou = filterProducts(justForYou);
  const filteredFlashSale = filterProducts(flashSale);
  const filteredMostPopular = filterProducts(mostPopular);

  return (
    <ScrollView style={styles.containerLayout}>
      {/* Header */}
      <View style={styles.headerLayout}>
        <Text style={styles.titleLayout}>Shop</Text>
        <TextInput
          style={styles.searchInputLayout}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      {/* Banner */}
      <Image
        source={{
          uri: "https://www.shutterstock.com/image-photo/row-different-female-clothes-hanging-260nw-1950712198.jpg",
        }}
        style={styles.bannerLayout}
      />

      {/* Categories */}
      <SectionTitle title="Categories" />
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToUnderConstruction(item)}>
            <View style={styles.categoryItemLayout}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.categoryImageLayout}
              />
              <Text style={styles.categoryTextLayout}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Top Products */}
      <SectionTitle title="Top Products" />
      <FlatList
        data={filteredTopProducts} // Usando el array filtrado
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToUnderConstruction(item)}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.topProductImageLayout}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() =>
          searchText ? (
            <Text style={{ padding: 10 }}>
              No se encontraron productos para "{searchText}"
            </Text>
          ) : null
        }
      />

      {/* New Items */}
      <SectionTitle title="New Items" />
      <View style={styles.gridLayout}>
        {filteredNewItems.length > 0 ? (
          filteredNewItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigateToUnderConstruction(item)}
            >
              <View style={styles.productCardLayout}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.productImageLayout}
                />
                <Text style={styles.productNameLayout}>{item.name}</Text>
                <Text style={styles.productPriceLayout}>
                  ${item.price.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : searchText ? (
          <Text style={{ padding: 10, textAlign: "center" }}>
            No se encontraron productos para "{searchText}"
          </Text>
        ) : null}
      </View>

      {/* Flash Sale */}
      <SectionTitle title="Flash Sale" />
      <FlatList
        data={filteredFlashSale} // Usando el array filtrado
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToUnderConstruction(item)}>
            <View style={styles.flashSaleItemLayout}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.flashSaleImageLayout}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() =>
          searchText ? (
            <Text style={{ padding: 10 }}>
              No se encontraron productos para "{searchText}"
            </Text>
          ) : null
        }
      />

      {/* Most Popular */}
      <SectionTitle title="Most Popular" />
      <FlatList
        data={filteredMostPopular} // Usando el array filtrado
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToUnderConstruction(item)}>
            <View style={styles.popularItemLayout}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.popularImageLayout}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() =>
          searchText ? (
            <Text style={{ padding: 10 }}>
              No se encontraron productos para "{searchText}"
            </Text>
          ) : null
        }
      />

      {/* Just for You */}
      <SectionTitle title="Just For You" />
      <View style={styles.gridLayout}>
        {filteredJustForYou.length > 0 ? (
          filteredJustForYou.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigateToUnderConstruction(item)}
            >
              <View style={styles.productCardLayout}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.productImageLayout}
                />
                <Text style={styles.productNameLayout}>{item.name}</Text>
                <Text style={styles.productPriceLayout}>
                  ${item.price.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : searchText ? (
          <Text style={{ padding: 10, textAlign: "center" }}>
            No se encontraron productos para "{searchText}"
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default LayoutScreen;
