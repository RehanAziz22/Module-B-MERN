// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from ''
// import Product from './singleProduct';
import Home from './screens/Home';
import Details from './screens/singleProduct';
import OrderScreen from './screens/order';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Details" component={Details}  />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    );
  }
  
function AppNavigation() {
  return (<>
    
    <NavigationContainer >
    <Tab.Navigator
    >
      <Tab.Screen  name="HomeScreen"  
      options={{
            // title: 'My home',
            headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
          // tabBarIcon: ({ color, size }) => (
          //   <Icon name="home" color={color} size={size} />
          // ),
        }} 
         component={HomeStackNavigator} />
      <Tab.Screen name="ContactScreen"
       options={{
            // title: 'My home',
            headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
        }} 
      component={HomeStackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
    </>
  );
}

export default AppNavigation;