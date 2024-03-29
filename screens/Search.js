import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchbar}
          placeholder="Search location..."
          placeholderTextColor="grey"
        />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -36.8509,
            longitude: 174.7645,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    flex: 1,
  },
  searchbar: {
    height: 80,
    paddingLeft: 40,
    backgroundColor: "white",
    textShadowColor: "pink",
  },
});
