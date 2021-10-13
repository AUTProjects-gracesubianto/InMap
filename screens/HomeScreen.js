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
        <View style={styles.header}></View>

        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder='Search here'/>
        </View>

        <View style={styles.categories}></View>
        
        <View style={styles.recents}></View>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "gold",
    },
    header: {
        height: '10%',
        backgroundColor: "pink",
    },
    search: {
        height: '10%',
        backgroundColor: "blue",
    },
    searchInput: {
        height: 50,
        width: '90%',
        backgroundColor: "white",
        alignSelf: "center", //centred horizontally
        top: '15%',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    categories: {
        height: '30%',
        backgroundColor: "red",
    },
    recents: {
        height: '50%',
        backgroundColor: "green",
    },
    
});

export default HomeScreen;