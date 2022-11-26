import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import {Provider as ReduxProvider } from "react-redux"

import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';
import CoffeNeeded from './screens/CoffeNeeded';
import GoManganInfo from './screens/GoManganInfo';


const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName = 'Home' screenOptions={screenOptions}>
              <Stack.Screen name= "Home" component={Home}/>
              <Stack.Screen name= "RestaurantDetail" component={RestaurantDetail}/>
              <Stack.Screen name= "OrderCompleted" component={OrderCompleted}/>
              <Stack.Screen name= "CoffeNeeded" component={CoffeNeeded}/>
              <Stack.Screen name= "GoManganInfo" component={GoManganInfo}/>
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}
