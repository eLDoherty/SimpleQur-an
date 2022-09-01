import React , {useState , Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image, 
  Button, 
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} 
from 'react-native/Libraries/NewAppScreen';
import Homepage from '../Homepage/Homepage';
import Welcome from '../Welcome/Welcome';
import Surah from '../Surah/Surah';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Surah" component={Surah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;