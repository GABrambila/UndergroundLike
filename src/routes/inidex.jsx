routes/index.js

import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import AuthStack from './auth/AuthStack';
import MainTabNavigator from './main/MainTabNavigator';

const SwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Main: MainTabNavigator,
 
});

const Routes = () => {
  return (
    <NavigationContainer>
      <SwitchNavigator />
    </NavigationContainer>
  );
};

export default Routes;
