import { StyleSheet } from "react-native";
import Description from "../components/Description";
import LottieView from "lottie-react-native";

function ExperimentDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("SecondExperimentDescription");
  };

  return <Description image={<LottieView style={styles.animation} source={require("../assets/animation/rocket.json")} autoPlay loop />} titleText="지금부터 실험을 시작하겠습니다." contentText={`실험은 총 세단계로 이루어져 있으며\n15분~20분 정도 소요됩니다.\n실험의 정확도를 위해 조용하고 집중할 수 있는 환경에서 시간의 여유를 가지고 실시해주세요\n\n‘시작' 버튼을 클릭하면 본 시행이 시작됩니다.`} handleButtonClick={handleButtonClick} buttonText="시작" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default ExperimentDescriptionScreen;
