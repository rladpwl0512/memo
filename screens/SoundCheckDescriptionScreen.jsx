import { StyleSheet, Text, View, Image } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";

function SoundCheckDescriptionScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("");
  };

  return (
    <View style={[global.container, styles.container]}>
      <Image style={styles.animation} source={require("../assets/animation/sound.gif")} />
      <Text style={[global.content, styles.content]}>
        지금부터 두번째 실험을 실시하도록 하겠습니다.{"\n"}
        {"\n"}실험에 앞서, 목소리를 듣는 실험이기 때문에 귀하께서 실험을 위해 소리를 잘 듣고 계신지 확인하기 위한 테스트를 진행하겠습니다.{"\n"}
        {"\n"}소리를 충분히 키워주시고 준비가 되면 다음 버튼을 눌러주세요
      </Text>
      <GreenButton text="다음" width="40%" onClick={handleButtonClick} />
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

export default SoundCheckDescriptionScreen;
