import React from "react";
import { StyleSheet, View } from "react-native";
import colours from "../config/colours";

function ListItemSeperator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colours.lightGray,
  },
});

export default ListItemSeperator;
