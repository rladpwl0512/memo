import global from "../styles/globalStyle";
import colors from "../styles/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import { Audio } from "expo-av";

let clickSound = null;

const setupSound = async () => {
  try {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/click.mp3"), { shouldPlay: false });
    clickSound = sound;
  } catch (error) {
    console.log("Failed to load the sound", error);
  }
};

setupSound();

function GreenButton({ text, width, onClick, clicked = false, isDisabled }) {
  const playClickSound = async () => {
    try {
      if (clickSound) {
        await clickSound.replayAsync();
      }
    } catch (error) {
      console.log("Failed to play the sound", error);
    }
  };

  const handlePressIn = () => {
    playClickSound();
  };

  return (
    <Pressable onPressIn={handlePressIn} style={({ pressed }) => [styles.button, { width }, styles.filled, pressed && styles.pressed, clicked && styles.clicked]} onPress={onClick} disabled={isDisabled}>
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
