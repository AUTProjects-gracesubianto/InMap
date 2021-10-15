import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MapView1 from "./screens/MapView1";
import MapView2 from "./screens/MapView2";
import MapView3 from "./screens/MapView3";
import MapView4 from "./screens/MapView4";
import LoginPage from "./screens/LoginPage";
import Search from "./screens/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.header}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapView1" component={MapView1} />
        <Stack.Screen name="MapView2" component={MapView2} />
        <Stack.Screen name="MapView3" component={MapView3} />
        <Stack.Screen name="MapView4" component={MapView4} />
        <Stack.Screen name="Search" component={Search} />
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
