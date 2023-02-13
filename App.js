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
import WelcomeScreen from "./App/screens/WelcomeScreen";

export default function App() {
  console.log("App executed");
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
