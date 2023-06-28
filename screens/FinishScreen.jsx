import { StyleSheet } from "react-native";
import Description from "../components/Description";
import LottieView from "lottie-react-native";

function FinishScreen({ navigation }) {
  const handleButtonClick = () => {
    // 홈으로?
    navigation.navigate("");
  };

  return <Description image={<LottieView style={styles.animation} source={require("../assets/animation/finish.json")} autoPlay loop />} titleText="연구에 참여해주셔서 감사합니다" contentText={`궁금하신 점이 있다면\ninyoung0727@swu.ac.kr로 연락주세요.\n아래의 완료 버튼을 눌러 종료하여 주세요.`} handleButtonClick={handleButtonClick} buttonText="완료" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 250,
  },
});

export default FinishScreen;
