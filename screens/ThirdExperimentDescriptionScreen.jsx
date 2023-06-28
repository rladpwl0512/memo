import { StyleSheet, Image } from "react-native";
import Description from "../components/Description";

function ThirdExperimentDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("");
  };

  return <Description image={<Image style={styles.animation} source={require("../assets/animation/third.gif")} />} titleText="마지막 실험" contentText={`제시된 목소리와 얼굴 표정을 짝 맞추는 실험입니다.\n\n목소리를 잘 듣고,\n해당 목소리를 낸 것 같은 얼굴을 고르세요.\n\n이어폰이나 헤드셋을 착용하고,\n소리에 집중할 수 있는 공간에서\n실험을 실시 해주세요.\n\n아래의 버튼을 누르면 연습 시행이 2회 실시 됩니다.`} handleButtonClick={handleButtonClick} buttonText="시작" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default ThirdExperimentDescriptionScreen;
