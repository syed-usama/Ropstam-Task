import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../screens/forgotPassword/forgotPassword";
import SplashScreen from "../screens/onboardingScreens/splashScreen/splashScreen";
import LoginScreen from "../screens/onboardingScreens/loginScreen/loginScreen";
import SignupScreen from "../screens/onboardingScreens/signupScreen/signupScreen";
import Dashboard from "../screens/dashboardScreens/dashboard/dashboard";
import RegisterCar from "../screens/dashboardScreens/registerCar/registerCar";


const Stack = createStackNavigator();

const OnBoardStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={SplashScreen} name="SplashScreen" />
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={SignupScreen} name="SignupScreen" />
      <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
        </Stack.Navigator> 
  );
}
const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={RegisterCar} name="RegisterCar" />
      </Stack.Navigator>
  );
}

export { OnBoardStackNavigator,DashboardStackNavigator };