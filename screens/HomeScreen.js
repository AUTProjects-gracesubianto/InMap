import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

function HomeScreen(props) {
    //const pageName = "Home";
    return (
        
    //    <ImageBackground 
    //    style={styles.background}
    //    source={require('../app/assets/room1.jpg')}
    //    >
    //        <View style={styles.loginbutton} ></View>
    //        <View style={styles.regbutton} ></View>
    //    </ImageBackground>
    <SafeAreaView style={styles.background}>
        <View style={styles.header}>

            <Text style={styles.home}>Home</Text>
        </View>
        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder='Search here'/>
        </View>

        <View style={styles.categories}>
        <Text style={styles.categoryText}>Categories</Text>
        </View>

        <View style={styles.recents}>
            <Text style={styles.categoryText}>Recents</Text>
            <View style={styles.row}>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building1.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building2.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building3.jpg')}/>
            </View>
            
            <View style={styles.row}>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building4.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building5.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building6.jpg')}/>
            </View>
            
            <View style={styles.row}>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building7.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building8.jpg')}/>
            <Image 
            style={styles.buildings}
            source={require('../app/assets/building9.jpg')}/>
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
        height: '10%',
        backgroundColor: "pink",
    },
    search: {
        height: '10%',
        backgroundColor: "gold",
    },
    searchInput: {
        height: 50,
        width: '90%',
        backgroundColor: "white",
        alignSelf: "center", //centred horizontally
        top: '20%',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        paddingLeft: 20,
    },
    categories: {
        height: '30%',
        backgroundColor: "red",
    },
    categoryText: {
        top: '3%',
        left: '5%',
        fontSize: 25,
        color: "black",
        bottom: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    home: {
        alignSelf: "center",
        top: '30%',
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },
    recents: {
        height: '50%',
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
        top:30,
        right: 40,
        justifyContent: "space-evenly",
        //justifyContent: "center",
        //left: 10,
        //alignSelf: "center",
    }
    
});

export default HomeScreen;