import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/theme";

function LoginScreen({ navigation }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text) => {
    if (/^\d{0,11}$/.test(text)) {
      setInputText(text);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleButtonClick = () => {
    // db에 있는지 확인하는 과정
    // 제대로 입력했는지 확인하는 과정
    navigation.navigate("ExperimentDescription");
  };

  return (
    <View style={[global.container, styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={global.title}>연구에 참여해 주셔서 감사합니다</Text>
        <Text style={global.content}>연구 대상자 본인 확인을 진행하겠습니다.{"\n"}전화번호를 입력해주세요.</Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons style={styles.icon} name="md-call" size={24} color={colors.GRAY_700} />
        <TextInput style={styles.input} value={inputText} onChangeText={handleInputChange} keyboardType="numeric" maxLength={11} placeholder="전화번호를 입력해주세요 (예: 01012345678)" placeholderTextColor={colors.GRAY_700} onFocus={handleInputFocus} />
      </View>

      <GreenButton text="확인" width="100%" onClick={handleButtonClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    justifyContent: "center",
  },
  headerContainer: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 15,
    padding: 16,
    borderColor: colors.GRAY_700,
    width: "100%",
  },

  icon: {
    marginRight: 10,
  },
});

export default LoginScreen;
