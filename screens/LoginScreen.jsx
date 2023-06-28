import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/theme";
import CustomModal from "../components/CustomModal";

function LoginScreen({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleInputChange = (text) => {
    if (/^\d{0,11}$/.test(text)) {
      setInputText(text);
    }
  };

  const handleButtonClick = () => {
    // db에 있는지 확인하는 과정
    // 제대로 입력했는지 확인하는 과정
    navigation.navigate("ExperimentDescription");
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <View style={[global.container, styles.container]}>
        <View style={styles.headerContainer}>
          <Text style={global.title}>연구에 참여해 주셔서 감사합니다</Text>
          <Text style={global.content}>연구 대상자 본인 확인을 진행하겠습니다.{"\n"}전화번호를 입력해주세요.</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="md-call" size={24} color={colors.GRAY_700} />
          <TextInput style={styles.input} value={inputText} onChangeText={handleInputChange} keyboardType="numeric" maxLength={11} placeholder="전화번호를 입력해주세요 (예: 01012345678)" placeholderTextColor={colors.GRAY_700} />
        </View>

        <GreenButton text="확인" width="100%" onClick={handleButtonClick} />
      </View>

      <CustomModal visible={isModalVisible} onClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>정보가 없습니다</Text>
          <Text style={[styles.modalContent, global.content]}>
            등록되지 않은 번호입니다.{"\n"}다시 시도해보세요.{"\n"}(문의: inyoung0727@swu.ac.kr){" "}
          </Text>
          <Pressable style={styles.modalButton} onPress={closeModal}>
            <Text style={[global.title, styles.modalButtonText]}>확인</Text>
          </Pressable>
        </View>
      </CustomModal>
    </>
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

  modalTitle: {
    textAlign: "center",
  },

  modalContent: {
    textAlign: "center",
  },

  modalButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: colors.PRIMARY_100,
  },

  modalButtonText: {
    color: colors.WHITE,
  },

  modalContainer: {
    padding: 20,
    alignItems: "center",
    gap: 15,
  },
});

export default LoginScreen;
