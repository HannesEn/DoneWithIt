import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import AppButton from "./App/components/AppButton";
import colours from "./App/config/colours";
import Icon from "./App/components/Icon";
import Screen from "./App/components/Screen";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import Card from "./App/components/Card";
import AppText from "./App/components/AppText";
import ListingDetailsScreen from "./App/components/ListingDetailsScreen";
import ListItem from "./App/components/ListItem";
import MessagesScreen from "./App/screens/MessagesScreen";
import AccountScreen from "./App/screens/AccountScreen";

export default function App() {
  console.log("App executed");
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.black,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textCustomization: {
    color: "#fff",
    fontSize: 50,
    backgroundColor: "#000000",
    padding: 50,
    width: "100%",
    textAlign: "center",
  },
  iconImageCustomization: {
    height: 100,
    width: 100,
  },
  imageCustomization: {
    margin: 50,
  },
});
