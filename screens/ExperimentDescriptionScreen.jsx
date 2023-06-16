import { StyleSheet, Text, View } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";
import LottieView from "lottie-react-native";

function ExperimentDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("");
  };

  return (
    <View style={[global.container, styles.container]}>
      <LottieView style={styles.animation} source={require("../assets/animation/rocket.json")} autoPlay loop />
      <Text style={global.title}>지금부터 실험을 시작하겠습니다.</Text>
      <Text style={[global.content, styles.content]}>
        실험은 총 세단계로 이루어져 있으며,{"\n"}15분~20분 정도 소요됩니다.{"\n"}실험의 정확도를 위해 조용하고 집중할 수 있는 환경에서 시간의 여유를 가지고 실시해주세요.
      </Text>
      <GreenButton text="확인" width="40%" onClick={handleButtonClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    justifyContent: "center",
  },

  animation: {
    width: "60%",
  },

  content: {
    textAlign: "center",
  },
});

export default ExperimentDescriptionScreen;
