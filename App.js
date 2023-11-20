App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'; // Importando as rotas definidas no arquivo routes/index.js

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
