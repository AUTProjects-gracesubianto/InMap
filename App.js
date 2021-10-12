import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  SafeAreaView, 
  Button 
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import HomeScreen from './screens/HomeScreen';
import MapView from './screens/MapView';

export default function App() {

  return <MapView/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
