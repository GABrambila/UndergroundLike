routes/auth/AuthStack.js

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/telaLog/LoginScreen'; // Caminho para a tela de login
import RegisterScreen from '../../screens/telaLog/RegisterScreen'; // Caminho para a tela de registro

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
   
    </Stack.Navigator>
  );
};

export default AuthStack;
