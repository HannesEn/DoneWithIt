import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colours from "../config/colours";
import AppText from "./AppText";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem image={require("../assets/mosh.jpg)")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colours.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
