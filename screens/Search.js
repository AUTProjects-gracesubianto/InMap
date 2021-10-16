import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Search = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyAlgHoPlHjeM3gZ6V5_GvdpyK4OSnurL6o",
          language: "en",
        }}
      />
    </View>
  );
};

export default Search;
