// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from ''
// import Product from './singleProduct';
import SplashScreen from './screens/splashscreen';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/home';
import AppMap from './screens/map';
import Location from './screens/currentLocatio';


const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (<>

    <NavigationContainer >

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen options={{
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
          name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="map" component={AppMap} />
        <Stack.Screen name="location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default AppNavigation;