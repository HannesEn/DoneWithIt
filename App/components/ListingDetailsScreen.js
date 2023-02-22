import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <AppText></AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});

export default ListingDetailsScreen;
