import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from '../../styles/globalStyles.js';
import api from '../../api/serviceApi.js'; // Asegúrate de tener este archivo configurado
import { useNavigation } from '@react-navigation/native'; // Importamos la navegación

const LayoutScreen = () => {
  const [categories, setCategories] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [justForYou, setJustForYou] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation(); // Usamos el hook de navegación

  const fetchData = async () => {
    try {
      const [cats, top, newItems, justForYou, flash, popular] = await Promise.all([
        api.getByType('mockCategories'),
        api.getByType('mockTopProducts'),
        api.getByType('mockNewItems'),
        api.getByType('mockJustForYou'),
        api.getByType('mockFlashSale'),
        api.getByType('mockMostPopular'),
      ]);

      setCategories(cats);
      setTopProducts(top);
      setNewItems(newItems);
      setJustForYou(justForYou);
      setFlashSale(flash);
      setMostPopular(popular);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const SectionTitle = ({ title }) => (
    <View style={styles.sectionHeaderLayout}>
      <Text style={styles.sectionTitleLayout}>{title}</Text>
      <TouchableOpacity onPress={navigateToUnderConstruction}>
        <Text style={styles.seeAllLayout}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  // Función para redirigir a la pantalla "UnderConstruction"
  const navigateToUnderConstruction = () => {
    navigation.navigate('UnderConstruction');
  };

  if (loading) {
    return (
      <View style={[styles.containerLayout, { justifyContent: 'center', alignItems: 'center', flex: 1 }]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.containerLayout}>
      {/* Header */}
      <View style={styles.headerLayout}>
        <Text style={styles.titleLayout}>Shop</Text>
        <TextInput style={styles.searchInputLayout} placeholder="Search" />
      </View>

      {/* Banner */}
      <Image
        source={{ uri: 'https://www.shutterstock.com/image-photo/row-different-female-clothes-hanging-260nw-1950712198.jpg' }}
        style={styles.bannerLayout}
      />

      {/* Categories */}
      <SectionTitle title="Categories" />
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigateToUnderConstruction}>
            <View style={styles.categoryItemLayout}>
              <Image source={{ uri: item.imageUrl }} style={styles.categoryImageLayout} />
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
        data={topProducts}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigateToUnderConstruction}>
            <Image source={{ uri: item.imageUrl }} style={styles.topProductImageLayout} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* New Items */}
      <SectionTitle title="New Items" />
      <View style={styles.gridLayout}>
        {newItems.map((item) => (
          <TouchableOpacity key={item.id} onPress={navigateToUnderConstruction}>
            <View style={styles.productCardLayout}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImageLayout} />
              <Text style={styles.productNameLayout}>{item.name}</Text>
              <Text style={styles.productPriceLayout}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Flash Sale */}
      <SectionTitle title="Flash Sale" />
      <FlatList
        data={flashSale}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigateToUnderConstruction}>
            <View style={styles.flashSaleItemLayout}>
              <Image source={{ uri: item.imageUrl }} style={styles.flashSaleImageLayout} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Most Popular */}
      <SectionTitle title="Most Popular" />
      <FlatList
        data={mostPopular}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigateToUnderConstruction}>
            <View style={styles.popularItemLayout}>
              <Image source={{ uri: item.imageUrl }} style={styles.popularImageLayout} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Just for You */}
      <SectionTitle title="Just For You" />
      <View style={styles.gridLayout}>
        {justForYou.map((item) => (
          <TouchableOpacity key={item.id} onPress={navigateToUnderConstruction}>
            <View style={styles.productCardLayout}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImageLayout} />
              <Text style={styles.productNameLayout}>{item.name}</Text>
              <Text style={styles.productPriceLayout}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default LayoutScreen;
