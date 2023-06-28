import { StyleSheet, Image } from "react-native";
import Description from "../components/Description";

function SecondExperimentDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("");
  };

  return <Description image={<Image style={styles.animation} source={require("../assets/animation/second.gif")} />} titleText="두번째 실험" contentText={`제시된 목소리의 감정을 맞추는 실험입니다.\n\n목소리를 잘 듣고, 목소리의 감정을\n가장 잘 설명하는 단어를 고르세요.\n\n이어폰이나 헤드셋을 착용하고,\n소리에 집중할 수 있는 공간에서\n실험을 실시 해주세요.\n\n아래의 버튼을 누르면 연습 시행이 2회 실시 됩니다.`} handleButtonClick={handleButtonClick} buttonText="시작" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default SecondExperimentDescriptionScreen;
