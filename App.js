import React from 'react';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const menu = require('./assets/favicon.png');

const menu = require('./assets/menu.png');
const pp = require('./assets/pp.jpg');

const back = require('./assets/back.png');
const partager = require('./assets/partager.png');
const cadanar = require('./assets/cadanar.png');

const home = require('./assets/home.png')


const HomeScreen = require('./Screen/home')
const Settings = require('./Screen/Settings')
const DetailsScreen = require('./Screen/panier')

import route from './Screen/Route.js'
import user from './Screen/user';
// import panier from './Screen/panier1';
import Search from './Screen/Search';
import liste from './Screen/Home2';
import Details from './Screen/Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/*
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Image
        source={menu}
        style={{ width: 200, height: 200 }}
      />
    </TouchableOpacity>
  </View>
);*/

/*
const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Retour" onPress={() => navigation.goBack()} />
  </View>
);*/

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text style={{ color: color }}> </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (

              // <TouchableOpacity onPress={() => console.log('HomeScreen')}>
              <Image
                source={require('./assets/image/home.png')}
                style={{ width: 30, height: 30, marginTop: 10 }}
              />

            );
          },
        }}
      />
      <Tab.Screen
        name="Search1"
        component={Search}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: false,

          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text style={{ color: color }}> </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (

              // <TouchableOpacity onPress={() => console.log('Recherche')}>
              <Image
                source={require('./assets/image/loupe.png')}
                style={{ width: 30, height: 30, marginTop: 10 }}
              />

            );
          },
        }}
      />
      <Tab.Screen
        name="panier"
        component={DetailsScreen}
        options={{
          headerTitle: () => (
            <View style={styles.Detail}>
              {/* <TouchableOpacity onPress={() => console.log('Back')}> */}
              <Image source={back} style={styles.back} />

              <Text style={{ marginTop: 25, fontSize: 20, }}>Product Detail</Text>
              {/* <TouchableOpacity onPress={() => console.log('partager')}> */}
              <Image source={partager} style={styles.partager} />

            </View>
          ),

          tabBarLabel: ({ focused, color }) => {
            return (
              <View>

                <Text style={{ color: color }}> </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (

              // <TouchableOpacity onPress={() => console.log('Pannier')}>
              <Image
                source={require('./assets/image/panier.png')}
                style={{ width: 30, height: 30, marginTop: 10 }}
              />

            );
          },
        }}
      />
      <Tab.Screen
        name="    "
        component={user}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            return (

              // <TouchableOpacity onPress={() => console.log('User')}>
              <Image
                source={require('./assets/image/personne.png')}
                style={{ width: 30, height: 30, marginTop: 10 }}
              />

            );
          },
        }}
      />
      {/* <Tab.Screen name="Profile" component={profileScreen} /> */}
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home1"
          component={Home}
          options={{
            headerShown: false,

            tabBarLabel: ({ focused, color }) => {
              return (
                <View>
                  <Text style={{ color: color }}> </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (

                // <TouchableOpacity onPress={() => console.log('Home')}>
                <Image
                  source={home}
                  style={{ width: 30, height: 30, marginTop: 10 }}
                />

              );
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="User" component={user} options={{ headerShown: false, }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false, }} />
        <Stack.Screen name="liste" component={liste} options={{ headerShown: false, }} />
        <Stack.Screen name="Details2" component={Details} options={{ headerShown: false, }} />
        <Stack.Screen name="route" component={route} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'red',
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    marginTop: 15,
    width: 45,
    height: 38,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
  },
  pp: {
    marginTop: 5,
    width: 45,
    height: 45,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  back: {
    marginTop: 15,
    width: 45,
    height: 38,
    resizeMode: 'contain',
    backgroundColor: '#f2a8a9',
    borderWidth: 2,
    borderRadius: 10,
    // marginLeft: 10,
    padding: 0,
  },
  Detail: {
    backgroundColor: '#FBD3CB',
    height: 60,
    width: '110%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: -15,
    padding: 0,
  },
  partager: {
    marginTop: 15,
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    padding: 0,
  },
  autre: {
    // backgroundColor: '#FBD3CB',
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
  },
  cadanar: {
    marginTop: 15,
    width: 45,
    height: 40,
    resizeMode: 'contain',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    padding: 0,
  },
  backCadanar: {
    marginTop: 15,
    width: 45,
    height: 38,
    resizeMode: 'contain',
    // backgroundColor: '#f2a8a9',
    borderWidth: 2,
    borderRadius: 10,
    // marginLeft: 10,
    padding: 0,
  },
})