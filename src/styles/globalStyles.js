import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    display: 'flex',
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
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  // Botón principal
  button: {
    backgroundColor: '#007AFF',
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
    backgroundColor: '#fff',
  },
  homeCard: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 80,
    borderRadius: 30,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  homeImage: {
    width: width - 40,
    height: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    resizeMode: 'cover',
  },
  homeTextContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  homeDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#246BFD',
    width: 12,
    height: 12,
  },

});
