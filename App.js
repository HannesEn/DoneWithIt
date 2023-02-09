import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Text style={styles.textCustomization}>Hello friend.</Text>
      <TouchableWithoutFeedback onPress={() => console.log("icon pressed")}>
        <Image
          style={[styles.iconImageCustomization, styles.imageCustomization]}
          source={require("./assets/icon.png")}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("Picsum image pressed")}>
        <Image
          style={styles.imageCustomization}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
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
