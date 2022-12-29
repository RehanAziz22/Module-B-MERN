// In App.js in a new project

import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
// import Icon from ''
// import Product from './singleProduct';
import SplashScreen from './screens/splashscreen';
import Login from './screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './screens/signup';
import Home from './screens/home';
import styles from './screens/style';
import CreateDeals from './screens/createDeals';
import OrderScreen from './screens/orderScreen';
import Search from './screens/search';
import Profile from './screens/profile';
import AppMap from './screens/map';
import Promos from './screens/Promos';
import BookingScreen from './screens/bookingScreen';
// import AppMap from './screens/map';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeBottomNavigator = () => {
  let [userNav, setUserNav] = useState(true)
  let [profileInfo, setProfileInfo] = useState([])

  // getData = () => {
  //   database().ref('users/').on('value', dt => {
  //     let li = Object.values(dt.val())
  //     li.filter(x => console.log(x.category))
  //     // let filterUser = li.filter(x => x.id)
  //     // setProfileInfo([...filterUser])
  //     // if (profileInfo.category == "admin") {
  //     //   console.log(profileInfo.category)
  //     //   setUserNav(true)
  //     // }
  //     // else {
  //     //   console.log(profileInfo.category)
  //     //   setUserNav(false)
  //     // }
  //     //   updateStarCount(postElement, data);
  //   });
  // }

  let checkUser = () => {
    const user = auth().currentUser;
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        var uid = user.uid;
        // console.log(uid)
        // setUserId(uid)
        database().ref('users/').on('value', dt => {
          let li = Object.values(dt.val())
          // li.filter(x => console.log(x.id ==uid))
          let filterUser = li.filter(x => x.id == uid)
          console.log(filterUser.category)
          // if (filterUser.category == "admin") {
          //   console.log(profileInfo.category)
          //   setUserNav(true)
          // }
          // else {
          //   console.log(profileInfo.category)
          //   setUserNav(false)
          // }
          //   updateStarCount(postElement, data);
        });
    } else {
        // No user is signed in.
    }
}
  useEffect(() => {
    checkUser()
  }, [])

  return (
    <Tab.Navigator
    >
      <Tab.Screen name="HomeStack"
        options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: styles._warning,
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
      {/* <Tab.Screen name="History"

        options={{
          title: 'History',
          headerStyle: {
            backgroundColor: styles._warning,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-bag" color={color} size={size} />
          ),
        }}
        component={Home} /> */}
      <Tab.Screen name="Search"

        options={{
          title: 'Deals',
          headerStyle: {
            backgroundColor: styles._warning,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
        component={Search} />
      {userNav && <Tab.Screen name="Create Deals"
        options={{
          title: 'Create Deals',
          headerStyle: {
            backgroundColor: styles._warning,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="local-dining" color={color} size={size} />
          ),
        }}
        component={CreateDeals} />}
      <Tab.Screen name="Profile"

        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: styles._warning,

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
        title: '',
        headerStyle: {
          backgroundColor: styles._warning,
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Home" component={Home} />
      <Stack.Screen options={{
        title: 'Todays Promo',
        headerStyle: {
          backgroundColor: styles._white,
        },
        headerTintColor: styles._warning,

        headerTitleStyle: {
          fontWeight: 'bold',

        },
      }}
        name="Promos" component={Promos} />
      <Stack.Screen options={{
        title: 'Booking Details',
        headerStyle: {
          backgroundColor: styles._warning,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="BookingScreen" component={BookingScreen} />
      <Stack.Screen options={{
        title: 'Order',
        headerStyle: {
          backgroundColor: styles._warning,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="OrderScreen" component={OrderScreen} />

      <Stack.Screen options={{
        title: 'Map',
        headerStyle: {
          backgroundColor: styles._warning,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="map" component={AppMap} />
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
        {/* <Stack.Screen name="Promos" component={Promos} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default AppNavigation;