import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

function HomeScreen(props) {
    return (
        
    //    <ImageBackground 
    //    style={styles.background}
    //    source={require('../app/assets/room1.jpg')}
    //    >
    //        <View style={styles.loginbutton} ></View>
    //        <View style={styles.regbutton} ></View>
    //    </ImageBackground>
    <SafeAreaView style={styles.background}>
        <View style={styles.container}>
        <TextInput style={styles.searchIn} placeholder='Search here....'/>
    </View>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //justifyContent: "flex-end",
        backgroundColor: "gold"
    },
    container: {
        width: '100%',
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        paddingLeft: 10,
    },
    searchIn: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
    },
    // loginbutton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "green"
    // },
    // regbutton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "blue"
    // }
});

export default HomeScreen;