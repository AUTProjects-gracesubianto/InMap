# InMap

## Description
This repository contains the development progress of the InMap application created for the Mobile Systems Development (COMP826) paper at AUT.
InMap is a context-aware mobile app for finding rooms inside a building (indoor mapping).

The application was created using the Visual Studio Code IDE, with the JavaScript programming language. The application was simulated using the Xcode IDE simulator and Expo simulation platform. 

An overview of the current progress has been shown below:

<img src="README Images/App_Navigation.png" height="500">

A short video of the developed features can be accessed through this link: https://www.youtube.com/watch?v=wwtrPZR29Ls

## Installation
(Using Visual Studio Code)

1. Download the code in a zip format or use the GitHub Clone function to open the project in the IDE. Alternatively, install the project through terminal using 
```sh
npm install "git repo url"
```

2. Ensure that you are running node version 12 or higher. This can be checked using 
``` sh
node -v
```
3. Install Expo CLI to make sure that the React Native project can be started in the web browser
```sh
sudo npm i -g expo-cli
```

## Building
1. Install the Xcode IDE and run it. Go into the *Xcode* menu, select *Open Developer Tool* and then the *Simulator*.

<img src="README Images/Xcode_Simulator.png" width="800">

2. Select the iOS iPhone 11 device, as this is what this project has mainly been devleloped on.

3. Run the project through the terminal by using
```sh
npm run ios
```
This should open the project JavaScript Metro Bundler for React Native, reponsible for compiling the code and opening the simulator. This command in particular will run an iOS simulator using Xcode.

<img src="README Images/Metro_Bundler.png" width="700">
<img src="README Images/Simulator.png" width="700">

4. When the simulator runs for the first time, you may need to grant permission.

<img src="README Images/Expo_Xcode.png" height="200">


## Requirements
Depending on the default dependencies, the project may require extra installations. This includes the following:
```sh
npm install expo-status-bar
npm install react-navigation/native
npm install react-navigation/native-stack
npm install react-native-google-places-autocomplete
npm install react-native-maps
```
## Resources
Some resources used or looked at in the development of this project include:
- [React Native Tutorial for Beginners - Build a React Native App](https://www.youtube.com/watch?v=0-S5a0eXPoc)
- [Expo CLI](https://www.npmjs.com/package/expo-cli)
- [Login & Signup Screen UI Design Tutorial in React Native](https://www.youtube.com/watch?v=Rs72pRwXIzA&list=PLQWFhX-gwJbmmqcP-9zMXBaxQbGKfIJY2&index=6)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Layout with Flexbox](https://reactnative.dev/docs/flexbox)
- [React-Native dropdown searchbar](https://swairaq.medium.com/react-native-dropdown-searchbar-adc4532f7535)
- [How to use the FlatList Component — React Native Basics](https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6)
- [Common React Native App Layouts: Login Page](https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639)
- [Google Place Search in React Native](https://www.youtube.com/watch?v=KvnjOUFK0Cw)
- [Restaurant Finder App with React Native](https://dev.to/kpete2017/how-i-made-a-restaurant-finder-app-with-react-native-part-1-1aic)


