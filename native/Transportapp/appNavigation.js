// In App.js in a new project

import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
// import Icon from ''
// import Product from './singleProduct';
import SplashScreen from './screens/splashscreen';
import Login from './screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './screens/signup';
import Home from './screens/home';
import styles from './screens/style';
import CreateVehicle from './screens/createVehicle';
import Bus from './screens/bus';
import Van from './screens/van';
import Car from './screens/car';
import Bike from './screens/bike';
import VehicleDetails from './screens/vehicleDetails';
import BookingScreen from './screens/bookingScreen';
import UserSchedule from './screens/schedule';
import Profile from './profile';
// import AppMap from './screens/map';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeBottomNavigator = () => {
  let [userNav, setUserNav] = useState(true)
  getData = () => {
    database().ref('users/').on('value', dt => {
      let li = Object.values(dt.val());
      li.filter(x => x.category == "user")
      setUserNav(false)
      //   updateStarCount(postElement, data);
    });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Tab.Navigator
    >
      <Tab.Screen name="HomeStack"
        options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: styles._danger,
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={HomeStackScreen} />
      <Tab.Screen name="History"

        options={{
          title: 'History',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
        component={Home} />
      <Tab.Screen name="Schedule"

        options={{
          title: 'Schedule',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="departure-board" color={color} size={size} />
          ),
        }}
        component={UserSchedule} />
      {userNav && <Tab.Screen name="CreateVehicle"
        options={{
          title: 'Create Vehicle',
          headerStyle: {
            backgroundColor: styles._danger,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="commute" color={color} size={size} />
          ),
        }}
        component={CreateVehicle} />}
      <Tab.Screen name="Profile"

        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
        component={Profile} />
    </Tab.Navigator>
  );
}
const HomeStackScreen = () => {

  return (
    <Stack.Navigator
    >
      <Stack.Screen options={{
        title: 'MyRideMate',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Home" component={Home} />
      <Stack.Screen options={{
        title: 'Bus Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Bus" component={Bus} />
      <Stack.Screen options={{
        title: 'Bike Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Bike" component={Bike} />
      <Stack.Screen options={{
        title: 'Car Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Car" component={Car} />
      <Stack.Screen options={{
        title: 'Van Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Van" component={Van} />
      <Stack.Screen options={{
        title: 'Booking Details',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen options={{
        title: 'Ride Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="BookingScreen" component={BookingScreen} />

      {/* <Stack.Screen options={{
        title: 'Map',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="map" component={AppMap} /> */}
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (<>

    <NavigationContainer >

      <Stack.Navigator
        screenOptions={{
          // headerShown: false
        }}>
        <Stack.Screen options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // tabBarIcon: ({ color, size }) => (
          //   <Icon name="home" color={color} size={size} />
          // ),
        }}
          name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="BottomNav" component={HomeBottomNavigator} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen name="Bus" component={Bus} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default AppNavigation;