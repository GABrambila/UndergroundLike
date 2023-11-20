routes/main/MainTabNavigator.js

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen'; // Caminho para a tela Home
import SettingsScreen from '../../screens/main/SettingsScreen'; // Caminho para a tela de configurações

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
     
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
