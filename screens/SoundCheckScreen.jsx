import { View, Image, StyleSheet } from "react-native";
import GreenButton from "../components/GreenButton";
import global from "../styles/globalStyle";

function SoundCheckScreen() {
  const handleButtonClick = () => {
    // 처리
  };

  return (
    <View style={[global.container, styles.container]}>
      <Image style={styles.icon} source={require("../assets/icon/speaker.png")} />
      <View style={styles.buttonContainer}>
        <GreenButton text="귀뚜라미" width="40%" onClick={handleButtonClick} />
        <GreenButton text="닭" width="40%" onClick={handleButtonClick} />
        <GreenButton text="자동차" width="40%" onClick={handleButtonClick} />
        <GreenButton text="초인종" width="40%" onClick={handleButtonClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 150,
    height: 150,
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});

export default SoundCheckScreen;
