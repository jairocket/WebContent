import axios from 'axios';

// Configura a URL base para todas as requisições
const api = axios.create({
  baseURL: 'http://localhost:8080', // altere para a URL do seu backend
});

// Função para criar um cliente
export const createCustomer = async (customerData) => {
  try {
    const response = await api.post('/customers', customerData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
};

export default api;
