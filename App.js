import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CreateAccount from "./Screen/CreateAccount";
import LoginTemplate from "./Screen/LoginTemplate";
import WelcomeBack from "./Screen/WelcomeBack";
export default function App () {
  return (
    <View style={styles.container}>
        <LoginTemplate />
    </View>
  )
};

const styles = StyleSheet.create({
  container : {
    flex:1
  }
})