import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function MapView(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../app/assets/miniMap.jpeg")}
      >
        <Image
          style={styles.zoom}
          source={require("../app/assets/miniMap.jpeg")}
        ></Image>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  zoom: {
    backgroundColor: "blue",
    height: 150,
    width: 200,
    justifyContent: "flex-end",
    borderWidth: 10,
    borderColor: "white",
    left: "40%",
    top: "55%",
  },
  background: {
    //flex: 1,
    height: "120%",
    width: "120%",

    //justifyContent: "center",
  },
});

export default MapView;
