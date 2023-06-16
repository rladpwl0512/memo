import { StyleSheet, Text, View, Image } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";

function SecondExperimentDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("");
  };

  return (
    <View style={[global.container, styles.container]}>
      <Image style={styles.animation} source={require("../assets/animation/second.gif")} />
      <Text style={global.title}>두번째 실험</Text>
      <Text style={[global.content, styles.content]}>
        제시된 목소리의 감정을 맞추는 실험입니다.{"\n"}
        {"\n"}목소리를 잘 듣고, 목소리의 감정을 가장 잘 설명하는 단어를 고르세요.{"\n"}
        {"\n"}이어폰이나 헤드셋을 착용하고, 소리에 집중할 수 있는 공간에서 실험을 실시 해주세요.{"\n"}
        {"\n"}아래의 버튼을 누르면 연습 시행이 2회 실시 됩니다.
      </Text>
      <GreenButton text="시작" width="40%" onClick={handleButtonClick} />
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

export default SecondExperimentDescriptionScreen;
