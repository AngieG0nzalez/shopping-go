import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import ButtonMenu from "../../components/ButtonMenu.js";
import styles from "../../styles/globalStyles.js";

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth * 0.9; // La tarjeta ocupará el 90% del ancho de la pantalla
const CARD_MARGIN_HORIZONTAL = (screenWidth - CARD_WIDTH) / 2;

const HomeScreen = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef();
  const numSlides = 4; // Define el número de slides
  const slides = [
    {
      id: "1",
      imageUrl:
        "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2018/03/10154558/segunda-mano-valencia.jpg",
      title: "¡Tu Estilo Empieza Aquí!",
      description:
        "Descubre las últimas tendencias y encuentra tu outfit perfecto sin salir de casa. En Shopping-go, la moda llega a tu puerta con un solo clic.",
    },
    {
      id: "2",
      imageUrl:
        "https://images.ecestaticos.com/DGzEPaSydv_oMWCrIPcnCF3zmUs=/0x87:1695x1042/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8b4%2F86d%2F831%2F8b486d831b58441d03cafa4a15b9f18c.jpg",
      title: "Looks Exclusivos, Solo Online",
      description:
        "Encuentra colecciones únicas y ofertas especiales que no verás en otro lugar. ¡Renueva tu armario con prendas originales y a la moda!",

    },
    {
      id: "3",
      imageUrl:
        "https://media.istockphoto.com/id/1190179908/es/foto/piernas-de-mujer-de-una-pila-de-ropa-en-el-suelo-concepto-de-adicci%C3%B3n-a-las-compras.jpg?s=612x612&w=0&k=20&c=rjT1ICR4Li-6g7rd3PBEeULdFtYsbBNYm3VbmwJ9de0=",
      title: "¡Descuentos Imperdibles!",
      description:
        "Aprovecha nuestras ofertas por tiempo limitado. ¡Prendas increíbles con descuentos que no querrás perderte! ¡Date un capricho hoy mismo!",
    },
    {
      id: "4",
      imageUrl:
        "https://tindalos.es/wp-content/uploads/2022/06/redes-sociales-mas-utilizadas.jpg",
      title: "Síguenos en Redes Sociales",
      description:
        "Inspírate con looks de otros usuarios, entérate de nuestras últimas novedades y participa en sorteos exclusivos. ¡Conéctate con la comunidad Shopping-go!",
      buttonText: "Comencemos",
      navigateTo: "Layout", // Reemplaza con tu URL de Instagram
    },
  ];
  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(contentOffset / CARD_WIDTH);
    setCurrentSlide(slideIndex);
  };

  const goToSlide = (slideIndex) => {
    scrollViewRef.current?.scrollTo({
      x: slideIndex * CARD_WIDTH,
      animated: true,
    });
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % numSlides;
      goToSlide(nextSlide);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval);
  }, [currentSlide, numSlides]);

  const handleButtonPress = (navigateTo) => {
    // if (navigation && navigateTo) {
       navigation.navigate(navigateTo);
    // } else {
      console.log("Navigation: ", navigateTo);
    // }
  };
  

  return (
    <View style={styles.homeContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={(event) => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const slideIndex = Math.round(contentOffset / CARD_WIDTH);
          setCurrentSlide(slideIndex);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: CARD_MARGIN_HORIZONTAL }}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
        decelerationRate="fast"
      >
        {slides.map((slide) => (
          <View key={slide.id} style={[styles.homeCard, { width: CARD_WIDTH }]}>
            <Image
              source={{ uri: slide.imageUrl }}
              style={styles.homeImage}
              resizeMode="cover"
            />
            <View style={styles.homeTextContent}>
              <Text style={styles.homeTitle}>{slide.title}</Text>
              <Text style={styles.homeDescription}>{slide.description}</Text>
              {slide.buttonText && (
                <View style={styles.buttonCarrousel}>
                  <Button
                    title={slide.buttonText}
                    onPress={() => handleButtonPress(slide.navigateTo)}
                    color="#004CFF"
                  />
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentSlide && styles.activeDot]}
            onTouchStart={() => goToSlide(index)}
          />
        ))}
      </View>
      <ButtonMenu navigation={navigation} />
    </View>
  );
};

export default HomeScreen;