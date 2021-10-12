import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HELLO WORLD!</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>

      <Image source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",}}/>

      </TouchableHighlight>
      <Button 
      color="orange"
      title="click me" onPress={() => console.log("button clicked")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
