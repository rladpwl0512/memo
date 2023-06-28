import global from "../styles/globalStyle";
import colors from "../styles/theme";
import { Pressable, StyleSheet, Text } from "react-native";

function GreenButton({ text, width, onClick, outline = false }) {
  return (
    <Pressable style={[styles.button, { width }, outline ? styles.outline : styles.filled]} onPress={onClick}>
      <Text style={[global.button, outline ? styles.outlineText : styles.filledText]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderRadius: 20,
  },

  filled: {
    backgroundColor: colors.PRIMARY_100,
  },

  filledText: {
    color: colors.WHITE,
  },

  outline: {
    borderWidth: 3,
    borderColor: colors.PRIMARY_100,
  },

  outlineText: {
    color: colors.PRIMARY_100,
  },
});

export default GreenButton;
