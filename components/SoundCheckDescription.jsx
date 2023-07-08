import { StyleSheet, Image } from "react-native";
import Description from "./Description";

function SoundCheckDescription({ onClickButton, message }) {
  return <Description image={<Image style={styles.animation} source={require("../assets/animation/sound.gif")} />} titleText="소리 테스트" contentText={`지금부터 ${message} 실험을 실시하도록 하겠습니다.\n\n실험에 앞서, 목소리를 듣는 실험이기 때문에\n귀하께서 실험을 위해 소리를 잘 듣고 계신지\n확인하기 위한 테스트를 진행하겠습니다.\n\n소리를 충분히 키워주시고\n준비가 되면 다음 버튼을 눌러주세요`} handleButtonClick={onClickButton} buttonText="다음" />;
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});

export default SoundCheckDescription;
