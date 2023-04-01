import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../components/Icon";
import colours from "../config/colours";
import ListItemSeperatorComponent from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colours.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colours.secondary },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="codewithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colours.lightYellow} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colours.lightGray,
  },
});

export default AccountScreen;
