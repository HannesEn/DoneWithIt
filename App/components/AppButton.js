import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colours from "../config/colours";

function AppButton(props) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colours.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
