import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Paginas/Login/Login'
import Produtos from '../Paginas/Produtos/Produtos';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Produtos' component={Produtos} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;