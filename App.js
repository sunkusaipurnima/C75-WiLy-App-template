/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";

import BottomTabNavigator from "./Components/BottomTabNavigator";



const App = (props) => {
  const [fontLoaded] = useFonts({ Rajdhani_600SemiBold });

  if (fontLoaded) {
    return (
     <BottomTabNavigator/>
    );
  } else {
    return <AppLoading />;
  }
};

const styles = StyleSheet.create({});

export default App;
