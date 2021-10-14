import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MapView from "./screens/MapView";
import LoginPage from "./screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.header}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapView" component={MapView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
  },
  header: {
    backgroundColor: "gold",
  },
});
