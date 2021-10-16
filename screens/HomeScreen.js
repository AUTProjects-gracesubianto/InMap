import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Pressable,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      {/* {search bar section} */}
      <View style={styles.search}>
        <TouchableHighlight
          style={styles.searchInput}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={{ fontSize: 16, marginTop: 15, color: "black" }}>
            Search Locations
          </Text>
        </TouchableHighlight>
      </View>

      {/* {category bars section} */}
      <View style={styles.categories}>
        <Text style={styles.categoryText}>Categories</Text>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Museums</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Hospitals</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Malls</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Airports</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Cinemas</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Universities</Text>
          </Pressable>
        </View>
      </View>

      {/* {recents section} */}
      <View style={styles.recents}>
        <Text style={styles.categoryText}>Recents</Text>
        {/* {first row of icons} */}
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("MapView4")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building1.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView2")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building2.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView3")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building3.jpg")}
            />
          </TouchableHighlight>
        </View>
        {/* {second row of icons} */}
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("MapView3")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building4.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView1")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building5.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView2")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building6.jpg")}
            />
          </TouchableHighlight>
        </View>
        {/* {third row of icons} */}
        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate("MapView2")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building7.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView4")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building8.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("MapView1")}>
            <Image
              style={styles.buildings}
              source={require("../app/assets/building9.jpg")}
            />
          </TouchableHighlight>
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
    width: "80%",
    backgroundColor: "#00cc66",
    alignSelf: "center", //centred horizontally
    top: "40%",
    borderRadius: 10,
    //borderColor: "green",
    //borderWidth: 1,
    paddingLeft: 100,
  },
  categories: {
    flex: 2,
    backgroundColor: "gold",
    justifyContent: "space-between",
  },
  categoryText: {
    top: "5%",
    left: "8%",
    fontSize: 25,
    color: "black",
    bottom: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    position: "absolute",
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
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "gold",
  },
  row: {
    top: 35,
    justifyContent: "space-evenly",
    position: "relative",
  },
  button: {
    height: 35,
    width: 300,
    top: "10%",
    bottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center",
  },
  text: {
    top: 6,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
