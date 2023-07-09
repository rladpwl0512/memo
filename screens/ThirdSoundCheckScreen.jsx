import { useState, useRef, useContext } from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import GreenButton from "../components/GreenButton";
import global from "../styles/globalStyle";
import CustomModal from "../components/CustomModal";
import colors from "../styles/theme";
import { Audio } from "expo-av";
import SoundCheckDescription from "../components/SoundCheckDescription";
import { db, firebase } from "../firebase";
import { UserContext } from "../contexts/UserContext";

function ThirdSoundCheckScreen({ navigation }) {
  const { user } = useContext(UserContext);

  const [sound, setSound] = useState();
  const [isWrongAnswerModalVisible, setIsWrongAnswerModalVisible] = useState(false);
  const [isListenModalVisible, setIsListenModalVisible] = useState(false);
  const [clickedButton, setClickedButton] = useState("");
  const [isDescription, setIsDescription] = useState(true);

  const wrongNumberRef = useRef(0);

  const sendSolvedData = () => {
    const data = {
      code: "pre3",
      wrongNumber: wrongNumberRef.current,
    };

    db.collection("solve")
      .doc(user)
      .update({
        soundCheck: firebase.firestore.FieldValue.arrayUnion(data),
      })
      .then(() => {
        console.log("Test added to Firestore successfully.");
      })
      .catch((error) => {
        console.log("Error adding test to Firestore:", error);
      });
  };

  async function handlePlayClick() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/car.mp3"));
    setSound(sound);
    await sound.playAsync();
  }

  const handleButtonClick = (clickedButton) => () => {
    setClickedButton(clickedButton);
    if (!sound) {
      setIsListenModalVisible(true);
      return;
    }

    if (clickedButton !== "car") {
      sound.unloadAsync();
      wrongNumberRef.current += 1;
      setIsWrongAnswerModalVisible(true);
      return;
    }
    sound.unloadAsync();
    sendSolvedData();
    navigation.navigate("ThirdExperimentDescription");
  };

  const closeWrongAnswerModal = () => {
    setIsWrongAnswerModalVisible(false);
    setClickedButton("");
  };

  const closeListenModal = () => {
    setIsListenModalVisible(false);
    setClickedButton("");
  };

  const handleStartButtonClick = () => {
    setIsDescription(false);
  };

  return isDescription ? (
    <SoundCheckDescription message="세번째" onClickButton={handleStartButtonClick} />
  ) : (
    <>
      <View style={[global.container, styles.container]}>
        <Pressable onPress={handlePlayClick}>
          <Image style={styles.icon} source={require("../assets/icon/speaker.png")} />
        </Pressable>
        <View style={styles.buttonContainer}>
          <GreenButton text="귀뚜라미" width="40%" onClick={handleButtonClick("cricket")} clicked={clickedButton === "cricket"} />
          <GreenButton text="닭" width="40%" onClick={handleButtonClick("chicken")} clicked={clickedButton === "chicken"} />
          <GreenButton text="자동차" width="40%" onClick={handleButtonClick("car")} clicked={clickedButton === "car"} />
          <GreenButton text="초인종" width="40%" onClick={handleButtonClick("bell")} clicked={clickedButton === "bell"} />
        </View>
      </View>

      <CustomModal visible={isWrongAnswerModalVisible} onClose={closeWrongAnswerModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>틀렸습니다</Text>
          <Text style={[styles.modalContent, global.content]}>소리를 충분히 키운 후 스피커 아이콘을 눌러 다시 들어보세요</Text>
          <Pressable style={styles.modalButton} onPress={closeWrongAnswerModal}>
            <Text style={[global.title, styles.modalButtonText]}>확인</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal visible={isListenModalVisible} onClose={closeListenModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.modalTitle, global.title]}>소리를 듣지 않고 체크하셨습니다</Text>
          <Text style={[styles.modalContent, global.content]}>스피커 아이콘을 눌러 소리를 들은 후, 답해주세요</Text>
          <Pressable style={styles.modalButton} onPress={closeListenModal}>
            <Text style={[global.title, styles.modalButtonText]}>확인</Text>
          </Pressable>
        </View>
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 150,
    height: 150,
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
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

export default ThirdSoundCheckScreen;
