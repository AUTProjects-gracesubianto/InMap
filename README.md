# InMap

## Description
This repository contains the development progress of the InMap application created for the Mobile Systems Development (COMP826) paper at AUT.
InMap is a context-aware mobile app for finding rooms inside a building (indoor mapping).

The application was created using the Visual Studio Code IDE, with the JavaScript programming language. The application was simulated using the Xcode IDE simulator and Expo simulation platform. 

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

2. Select the iOS iPhone 11 device, as this is what this project has mainly been devleloped on.

3. Run the project through the terminal by using
```sh
npm run ios
```
This should open the project JavaScript Metro Bundler for React Native, reponsible for compiling the code and opening the simulator. This command in particular will run an iOS simulator using Xcode.

## Requirements
Depending on the default dependencies, the prjoect may require extra installations. This includes the following:
```sh
npm install expo-status-bar
npm install react-navigation/native
npm install react-navigation/native-stack
npm install react-native-google-places-autocomplete
npm install react-native-maps
```
## Resources
Some resources used in the development of this project include:
- hh
- ii


