import { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/theme";
import CustomModal from "../components/CustomModal";
import { db } from "../firebase";
import { UserContext } from "../contexts/UserContext";

function LoginScreen({ navigation }) {
  const { updateUser } = useContext(UserContext);

  const [inputText, setInputText] = useState("");
  const [isResisterModalVisible, setIsResisterModalVisible] = useState(false);
  const [isFormModalVisible, setIsFormModalVisible] = useState(false);
  const [isTwiceModalVisible, setIsTwiceModalVisible] = useState(false);

  const createUserDoc = async (phoneNumber) => {
    try {
      await db.collection("solve").doc(phoneNumber).set({});
      console.log("created successfully.");
    } catch (error) {
      console.log("Error creating document:", error);
    }
  };

  const handleInputChange = (text) => {
    if (/^\d{0,11}$/.test(text)) {
      setInputText(text);
    }
  };

  // TODO: 리팩터링
  const handleButtonClick = async () => {
    // 폰 번호를 형식대로 입력하지 않았으면 종료
    const phoneNumberRex = /^(01[016789]{1})[0-9]{8}$/;
    if (!inputText.match(phoneNumberRex)) {
      setIsFormModalVisible(true);
      return;
    }

    // db에 없으면 종료 (inputText가 db에 있는지 확인)
    const userDb = await db.collection("users").where("phoneNumber", "==", inputText).get();

    if (userDb.empty) {
      setIsResisterModalVisible(true);
      return;
    }

    // flag가 이미 true라면 modal 띄우고 splash로 이동 후 종료 (이미 참여했음)
    for (const doc of userDb.docs) {
      const userData = doc.data();

      if (userData.loginFlag) {
        setIsTwiceModalVisible(true);
        return;
      }
    }

    // 모두 만족할 시 flag true로 만들기 + 실험 안내 페이지로 넘어감
    for (const doc of userDb.docs) {
      const userData = doc.data();

      if (userData.loginFlag !== true) {
        const userRef = doc.ref;
        await userRef.update({ loginFlag: true });
      }
    }
    createUserDoc(inputText);
    updateUser(inputText);
    navigation.navigate("ExperimentDescription");
  };

  const closeResisterModal = () => {
    setIsResisterModalVisible(false);
  };

  const closeFormModal = () => {
    setIsFormModalVisible(false);
  };

  const closeTwiceModal = () => {
    setIsTwiceModalVisible(false);
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
          <TextInput value={inputText} onChangeText={handleInputChange} keyboardType="numeric" maxLength={11} placeholder="(입력 예시) 01012345678" placeholderTextColor={colors.GRAY_700} autoFocus />
        </View>

        <GreenButton text="확인" width="100%" onClick={handleButtonClick} />
      </View>

      <CustomModal visible={isResisterModalVisible} onClose={closeResisterModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>정보가 없습니다</Text>
          <Text style={[styles.modalContent, global.content]}>
            등록되지 않은 번호입니다.{"\n"}다시 시도해보세요.{"\n"}(문의: inyoung0727@swu.ac.kr){" "}
          </Text>
          <Pressable style={styles.modalButton} onPress={closeResisterModal}>
            <Text style={[global.title, styles.modalButtonText]}>확인</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal visible={isFormModalVisible} onClose={closeFormModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>잘못 입력하셨습니다</Text>
          <Text style={[styles.modalContent, global.content]}>번호를 올바른 형식으로 입력해주세요.{"\n"}(예시: 01012345678)</Text>
          <Pressable style={styles.modalButton} onPress={closeFormModal}>
            <Text style={[global.title, styles.modalButtonText]}>확인</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal visible={isTwiceModalVisible} onClose={closeTwiceModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>이미 연구에 참여하셨습니다</Text>
          <Text style={[styles.modalContent, global.content]}>두번 연구에 참여할 수 없습니다.{"\n"}(문의: inyoung0727@swu.ac.kr)</Text>
          <Pressable style={styles.modalButton} onPress={closeTwiceModal}>
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
