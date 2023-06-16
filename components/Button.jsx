import global from "../styles/globalStyle";
import colors from "../styles/theme";
import { Pressable, StyleSheet, Text } from "react-native";

function Button({ text, width, onClick }) {
  return (
    <Pressable style={[styles.button, { width }]} onPress={onClick}>
      <Text style={global.button}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_100,
    color: colors.WHITE,
    padding: 24,
    borderRadius: 20,
  },
});

export default Button;
