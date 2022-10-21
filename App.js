import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginStack from "./Screen/LoginStack";


export default function App() {

  return (
    <LoginStack/>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})