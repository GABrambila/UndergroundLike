// services/location/LocationService.js

import * as Location from 'expo-location'; 

const LocationService = {
  getCurrentLocation: async () => {
    try {
      // Solicitar permissão para acessar a localização do usuário
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return { success: false, error: 'Permissão de localização negada' };
      }

      // Obter a localização atual do usuário
      let location = await Location.getCurrentPositionAsync({});

      // Retorna os dados da localização do usuário
      return { success: true, location };
    } catch (error) {
      return { success: false, error: 'Erro ao obter a localização' };
    }
  },

  
};

export default LocationService;
