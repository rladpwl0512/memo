import { StyleSheet, Text, View } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";

function Description({ image, titleText, contentText, handleButtonClick, buttonText }) {
  return (
    <View style={[global.container, styles.container]}>
      {image}
      <Text style={global.title}>{titleText}</Text>
      <Text style={[global.content, styles.content]}>{contentText}</Text>
      <GreenButton text={buttonText} width="40%" onClick={handleButtonClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  animation: {
    width: 200,
    height: 200,
  },

  content: {
    textAlign: "center",
  },
});

export default Description;
