import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function HomeScreen(props) {
    return (
        
       <ImageBackground 
       style={styles.background}
       source={require('../app/assets/room1.jpg')}
       >
           <View style={styles.loginbutton} ></View>
           <View style={styles.regbutton} ></View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginbutton: {
        width: '100%',
        height: 70,
        backgroundColor: "green"
    },
    regbutton: {
        width: '100%',
        height: 70,
        backgroundColor: "blue"
    }
});

export default HomeScreen;