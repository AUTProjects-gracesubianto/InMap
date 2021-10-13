import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  //const pageName = "Home";
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.search}>
        <TextInput style={styles.searchInput} placeholder="Search here" />
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoryText}>Categories</Text>
        <Button style={styles.button} title="Museums" />
      </View>

      <View style={styles.recents}>
        <Text style={styles.categoryText}>Recents</Text>
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("MapView")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building1.jpg")}
            />
          </TouchableHighlight>

          <Image
            style={styles.buildings}
            source={require("../app/assets/building2.jpg")}
          />

          <Image
            style={styles.buildings}
            source={require("../app/assets/building3.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.buildings}
            source={require("../app/assets/building4.jpg")}
          />
          <Image
            style={styles.buildings}
            source={require("../app/assets/building5.jpg")}
          />
          <Image
            style={styles.buildings}
            source={require("../app/assets/building6.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.buildings}
            source={require("../app/assets/building7.jpg")}
          />
          <Image
            style={styles.buildings}
            source={require("../app/assets/building8.jpg")}
          />
          <Image
            style={styles.buildings}
            source={require("../app/assets/building9.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "gold",
  },
  header: {
    height: "10%",
    backgroundColor: "pink",
  },
  search: {
    flex: 0.75,
    backgroundColor: "gold",
  },
  searchInput: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center", //centred horizontally
    top: "30%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 20,
  },
  categories: {
    flex: 2,
    backgroundColor: "red",
  },
  categoryText: {
    top: "5%",
    left: "8%",
    fontSize: 25,
    color: "black",
    bottom: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  home: {
    alignSelf: "center",
    top: "30%",
    fontSize: 35,
    color: "black",
    fontWeight: "bold",
  },
  recents: {
    flex: 3,
    backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buildings: {
    width: 105,
    height: 105,
    borderRadius: 10,
    padding: 10,
  },
  row: {
    top: 35,
    right: 40,
    justifyContent: "space-evenly",
  },
  button: {
    height: 20,
    width: 60,
    backgroundColor: "white",
  },
});

export default HomeScreen;
