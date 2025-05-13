import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const imageHeight = screenHeight * 0.35; // Ajusta la altura de la imagen según necesites


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  containerContent: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  loginContainer: {
    paddingHorizontal: 30,
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Bienvenida
  welcomeLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginBottom: 40,
  },

  // Inputs
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
  },
  iconContainer: {
    padding: 10,
  },

  // Botón principal
  button: {
    width: '100%',
    backgroundColor: '#004CFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Texto cancelar o alternativo
  cancelText: {
    marginTop: 10,
    color: '#888',
    textAlign: 'center',
  },

  // Título general
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },

  // Imagen perfil crear cuenta
  profileImagePlaceholder: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60,
    paddingTop: 60,
    backgroundColor: '#f0f0f0', // Un fondo gris claro para el contenedor
  },
  homeCard: {
    backgroundColor: '#fff',
    borderRadius: 20, // Bordes redondeados para la tarjeta
    overflow: 'hidden', // Asegura que la imagen respete los bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginVertical: 70,
  },
  homeImage: {
    width: '100%',
    height: imageHeight,
  },
  homeTextContent: {
    padding: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center', // Centrar el título
  },
  homeDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center', // Centrar la descripción
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 6,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#007bff', // Un color primario para el punto activo
  },
  loginRow: {
    width: '50vw',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonLoginContainer: {
    backgroundColor: '#004CFF',
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden'
  },
  buttonCarrousel: {
    backgroundColor: '#004CFF',
    width: '60%',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: '20%',
    marginVertical: 20,
  },
  welcomeIcon: {
    marginLeft: 16,
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#004CFF",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  containerLayout: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLayout: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
  titleLayout: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  searchInputLayout: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  bannerLayout: {
    width: '90%',
    height: 120,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 12,
  },
  sectionHeaderLayout: {
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitleLayout: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllLayout: {
    color: '#004CFF',
    fontWeight: '500',
  },
  categoryItemLayout: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryImageLayout: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  categoryTextLayout: {
    fontSize: 12,
  },
  topProductImageLayout: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
    borderRadius: 25,
  },
  gridLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  productCardLayout: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  productImageLayout: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productNameLayout: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 14,
  },
  productPriceLayout: {
    marginTop: 4,
    color: '#888',
  },
  flashSaleItemLayout: {
    marginHorizontal: 8,
  },
  flashSaleImageLayout: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  popularItemLayout: {
    marginHorizontal: 8,
  },
  popularImageLayout: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  containerRegister: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  imageContainerRegister: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageRegister: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagePlaceholderRegister: {
    fontSize: 40,
    color: '#ccc',
  },
  inputRegister: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  buttonRegister: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextRegister: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButtonRegister: {
    borderWidth: 1,
    borderColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonTextRegister: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
