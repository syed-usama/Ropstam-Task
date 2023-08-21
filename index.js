/**
 * @format
 */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {AppRegistry} from 'react-native';
import App from './src/navigation/main';
import {name as appName} from './app.json';
console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
const Main = () => {
   return (
     <NativeBaseProvider>
       <App />
     </NativeBaseProvider>
   );
 };
AppRegistry.registerComponent(appName, () => Main);
