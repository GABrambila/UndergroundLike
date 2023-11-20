// src/screens/Home/MapComponent.jsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Supondo que você esteja utilizando a biblioteca react-native-maps

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Lógica para obter a localização atual do usuário
    // e atualizar setUserLocation com as coordenadas
  }, []);

  return (
    <View style={styles.container}>
      {userLocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marcador para a localização do usuário */}
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Sua localização"
            description="Você está aqui"
          />
          {/* Outros marcadores de usuários próximos */}
          {/* ... */}
        </MapView>
      ) : (
        <Text>Carregando mapa...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
