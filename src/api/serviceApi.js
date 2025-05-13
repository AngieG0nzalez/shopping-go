// api.js
import axios from 'axios';

// URL base de la API (ajusta al endpoint real que estés usando)
const BASE_URL = 'https://6822c56fb342dce8004f4ff2.mockapi.io/api/v0/shop'; // cambia esto por tu endpoint real

const api = {
  // 🟢 Obtener todos los elementos
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los elementos:', error);
      throw error;
    }
  },

  // 🟢 Obtener elementos por tipo (por ejemplo: "mockCategories")
  getByType: async (type) => {
    try {
      const response = await axios.get(`${BASE_URL}?source=${type}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener elementos del tipo ${type}:`, error);
      throw error;
    }
  },

  // 🟢 Obtener elemento por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el elemento con ID ${id}:`, error);
      throw error;
    }
  },

  // 🟡 Crear un nuevo elemento
  create: async (item) => {
    try {
      const response = await axios.post(BASE_URL, item);
      return response.data;
    } catch (error) {
      console.error('Error al crear el elemento:', error);
      throw error;
    }
  },

  // 🟠 Actualizar un elemento completamente
  update: async (id, updatedItem) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updatedItem);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar el elemento con ID ${id}:`, error);
      throw error;
    }
  },

  // 🟠 Actualizar parcialmente un elemento
  updatePartial: async (id, partialData) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, partialData);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar parcialmente el elemento con ID ${id}:`, error);
      throw error;
    }
  },

  // 🔴 Eliminar un elemento
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar el elemento con ID ${id}:`, error);
      throw error;
    }
  },
};

export default api;
