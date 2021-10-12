import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function MapView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.close}></View>
            <View style={styles.del}></View>
            <Image style={styles.image} source={require("../app/assets/InMap.png")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    close: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        position: "absolute",
        top: 30,
        left: 40,

    },
    container: {
        backgroundColor: "blue",
        flex: 1,
    },
    del: {
        width: 50,
        height: 50,
        backgroundColor: "green",
        position: "absolute",
        top: 30,
        right: 40,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: "center"
        
    }
})

export default MapView;