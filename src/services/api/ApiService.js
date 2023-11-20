// services/api/ApiService.js

const BASE_URL = 'https://api.exemplo.com'; // URL base da  API

const ApiService = {
  fetchData: async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, options);

      if (!response.ok) {
        throw new Error('Erro ao carregar dados da API');
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  sendData: async (endpoint, data, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados para a API');
      }

      const responseData = await response.json();
      return { success: true, responseData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

 
};

export default ApiService;
