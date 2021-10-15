import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

const Circle = () => {
  return <View style={styles.circle} />;
};

function MapView(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../app/assets/building1Map.jpeg")}
      >
        <Image
          style={styles.zoom}
          source={require("../app/assets/miniMap.jpeg")}
        ></Image>
        {/* <Image
          style={styles.zoo}
          source={require("../app/assets/miniMap.jpeg")}
        ></Image> */}
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
  // zoo: {
  //   backgroundColor: "blue",
  //   height: 250,
  //   width: 200,
  //   justifyContent: "flex-end",
  //   borderWidth: 10,
  //   borderColor: "white",
  //   left: "50%",
  //   top: "65%",
  // },
  background: {
    //flex: 1,
    height: "120%",
    width: "120%",
  },
});

export default MapView;
