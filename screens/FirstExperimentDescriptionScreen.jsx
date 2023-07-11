import { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import Description from "../components/Description";
import disableBack from "../utils/disableBack";

function FirstExperimentDescriptionScreen({ navigation }) {
  useEffect(() => {
    disableBack();
  }, []);

  const handleButtonClick = () => {
    navigation.navigate("FirstExp");
  };

  return <Description image={<Image style={styles.animation} source={require("../assets/animation/first.gif")} />} titleText="첫번째 실험" contentText={`제시된 얼굴의 감정을 맞추는 실험입니다.\n\n화면에 나타난 얼굴의 표정을 잘 보고,\n얼굴의 감정을 가장 잘 설명하는 단어를 고르세요.\n\n아래의 버튼을 누르면 연습 시행이 2회 실시 됩니다.`} handleButtonClick={handleButtonClick} buttonText="시작" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default FirstExperimentDescriptionScreen;
