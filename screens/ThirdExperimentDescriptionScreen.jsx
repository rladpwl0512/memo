import { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import Description from "../components/Description";
import disableBack from "../utils/disableBack";

function ThirdExperimentDescriptionScreen({ navigation }) {
  useEffect(() => {
    disableBack();
  }, []);

  const handleButtonClick = () => {
    navigation.navigate("ThirdExp");
  };

  return <Description image={<Image style={styles.animation} source={require("../assets/animation/third.gif")} />} titleText="마지막 실험" contentText={`제시된 목소리와 얼굴 표정을\n짝 맞추는 실험입니다.\n\n목소리를 잘 듣고,\n목소리를 가장 잘 나타내는 얼굴을 고르세요.\n\n이어폰이나 헤드셋을 착용하고,\n소리에 집중할 수 있는 공간에서\n실험을 실시 해주세요.\n\n마지막 실험은 32문항이며,\n얼굴 선택지는 10초 간 지속됩니다.\n\n아래의 버튼을 누르면\n연습 시행이 2회 실시 됩니다.`} handleButtonClick={handleButtonClick} buttonText="시작" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default ThirdExperimentDescriptionScreen;
