import global from "../styles/globalStyle";
import colors from "../styles/theme";
import { Pressable, StyleSheet, Text } from "react-native";

// 클릭하면 크기가 작아졌다 커지고 + 색이 더 어둡게 변함
// 클릭이 된 버튼은 색을 유지한다.
function GreenButton({ text, width, onClick, clicked = false }) {
  return (
    <Pressable style={({ pressed }) => [styles.button, { width }, styles.filled, pressed && styles.pressed, clicked && styles.clicked]} onPress={onClick}>
      <Text style={[global.button, styles.filledText]}>{text}</Text>
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

  pressed: {
    backgroundColor: colors.PRIMARY_200,
    transform: [{ scale: 0.9 }],
  },

  clicked: {
    backgroundColor: colors.PRIMARY_200,
  },
});

export default GreenButton;
