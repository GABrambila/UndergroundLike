// src/screens/Home/HomeScreen.jsx

import React from 'react';
import { View } from 'react-native';
import MapComponent from './MapComponent'; // Componente do mapa
import styles from './styles'; // Estilos da tela home

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapComponent />
  
    </View>
  );
};

export default HomeScreen;
