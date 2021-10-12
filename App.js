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

export default function App() {
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", //primary
          justifyContent: "space-evenly",
          alignItems: "center", //secondary
          alignContent: "center",
          flexWrap: "wrap",
        }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100
        }}
          />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100}}
          />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100}}
          />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", //primary
          justifyContent: "space-evenly",
          alignItems: "center", //secondary
          alignContent: "center",
          flexWrap: "wrap",
        }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100
        }}
          />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100}}
          />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100}}
          />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", //primary
          justifyContent: "space-evenly",
          alignItems: "center", //secondary
          alignContent: "center",
          flexWrap: "wrap",
        }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100
        }}
          />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100}}
          />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100}}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
