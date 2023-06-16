import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReadyFont, setIsReadyFont] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      normal: require("./assets/fonts/gangwon.otf"),
      point: require("./assets/fonts/UhBeeZZIBA-Regular.ttf"),
    });
  };

  return (
    <View style={styles.container}>
      <Text>hey!!! up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
