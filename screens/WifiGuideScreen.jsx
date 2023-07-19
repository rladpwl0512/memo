import { StyleSheet } from "react-native";
import Description from "../components/Description";
import LottieView from "lottie-react-native";

function WifiGuideScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("Login");
  };

  return <Description image={<LottieView style={styles.animation} source={require("../assets/animation/wifi.json")} autoPlay loop />} titleText="와이파이 혹은 데이터를 연결해주세요" contentText={`와이파이 혹은 모바일 데이터 연결 상태가 아닌 경우,\n데이터가 저장되지 않습니다.\n\n안정적인 연결 상황 유지부탁드립니다.`} handleButtonClick={handleButtonClick} buttonText="확인" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 300,
  },
});

export default WifiGuideScreen;
