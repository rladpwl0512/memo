import { useEffect, useState } from "react";
import global from "../styles/globalStyle";
import colors from "../styles/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import { Audio } from "expo-av";

// 클릭하면 크기가 작아졌다 커지고 + 색이 더 어둡게 변함
// 클릭이 된 버튼은 색을 유지한다.
function GreenButton({ text, width, onClick, clicked = false }) {
  const [clickSound, setClickSound] = useState();

  useEffect(() => {
    const setupSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/click.wav"), { shouldPlay: true });
        console.log("hi");
        setClickSound(sound);
      } catch (error) {
        console.log("Failed to load the sound", error);
      }
    };

    setupSound();

    return () => {
      if (clickSound) {
        clickSound.unloadAsync();
      }
    };
  }, []);

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
    <Pressable onPressIn={handlePressIn} style={({ pressed }) => [styles.button, { width }, styles.filled, pressed && styles.pressed, clicked && styles.clicked]} onPress={onClick}>
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
