import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";
import LoginScreen from "./src/screens/LoginScreen.jsx";

const backImage = require("./images/add.svg");

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScrennFunc = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.maincontainer}>
        <ImageBackground source={backImage} style={styles.backImg}>
          {activeScreen === 0 ? (
            <LoginScreen changeScrenn={changeScrennFunc} />
          ) : (
            <RegistrationScreen changeScrenn={changeScrennFunc} />
          )}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  backImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
