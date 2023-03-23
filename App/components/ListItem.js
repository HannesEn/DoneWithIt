import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colours from "../config/colours";
import { Swipeable } from "react-native-gesture-handler";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colours.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image ? <Image style={styles.image} source={image} /> : null}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle ? (
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colours.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colours.medium,
  },
});

export default ListItem;
