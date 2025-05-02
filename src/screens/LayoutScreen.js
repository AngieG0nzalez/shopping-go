import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from "../styles/globalStyles";
import {
  mockCategories,
  mockTopProducts,
  mockNewItems,
  mockJustForYou,
  mockFlashSale,
  mockMostPopular,
} from '../mocks/mocks.js'; // Importa los mocks

const LayoutScreen = ({ navigation }) => {
  const SectionTitle = ({ title }) => (
    <View style={styles.sectionHeaderLayout}>
      <Text style={styles.sectionTitleLayout}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllLayout}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.containerLayout}>
      {/* Header */}
      <View style={styles.headerLayout}>
        <Text style={styles.titleLayout}>Shop</Text>
        <TextInput style={styles.searchInputLayout} placeholder="Search" />
      </View>

      {/* Banner */}
      <Image
        source={{ uri: "https://www.shutterstock.com/image-photo/row-different-female-clothes-hanging-260nw-1950712198.jpg" }}
        style={styles.bannerLayout}
      />

      {/* Categories */}
      <SectionTitle title="Categories" />
      <FlatList
        data={mockCategories}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.categoryItemLayout}>
            <Image source={{ uri: item.imageUrl }} style={styles.categoryImageLayout} />
            <Text style={styles.categoryTextLayout}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Top Products */}
      <SectionTitle title="Top Products" />
      <FlatList
        data={mockTopProducts}
        horizontal
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.topProductImageLayout} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* New Items */}
      <SectionTitle title="New Items" />
      <View style={styles.gridLayout}>
        {mockNewItems.map((item) => (
          <View key={item.id} style={styles.productCardLayout}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImageLayout} />
            <Text style={styles.productNameLayout}>{item.name}</Text>
            <Text style={styles.productPriceLayout}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Flash Sale */}
      <SectionTitle title="Flash Sale" />
      <FlatList
        data={mockFlashSale}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.flashSaleItemLayout}>
            <Image source={{ uri: item.imageUrl }} style={styles.flashSaleImageLayout} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Most Popular */}
      <SectionTitle title="Most Popular" />
      <FlatList
        data={mockMostPopular}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.popularItemLayout}>
            <Image source={{ uri: item.imageUrl }} style={styles.popularImageLayout} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Just for You */}
      <SectionTitle title="Just For You" />
      <View style={styles.gridLayout}>
        {mockJustForYou.map((item) => (
          <View key={item.id} style={styles.productCardLayout}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImageLayout} />
            <Text style={styles.productNameLayout}>{item.name}</Text>
            <Text style={styles.productPriceLayout}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default LayoutScreen;