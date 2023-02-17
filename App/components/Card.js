import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colours from "../config/colours";
import AppText from "./AppText/AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
