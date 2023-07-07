import React, { useEffect, useState, useContext, useRef } from "react";
import { View, Image, StyleSheet } from "react-native";
import { db, firebase } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import GreenButton from "../components/GreenButton";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";
import Description from "../components/Description";

const FirstExpScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const [clickedButton, setClickedButton] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [emotions, setEmotions] = useState([]);
  const [status, setStatus] = useState("");
  const [readyToStart, setReadyToStart] = useState(false);

  const countRef = useRef(0);
  const clickedButtonRef = useRef(null);
  const lastClickedButtonCountRef = useRef(null);
  const questionsRef = useRef(null);
  const isPreRef = useRef(true);

  const images = {
    P_1: require("../assets/face/p1.png"),
    P_2: require("../assets/face/p2.png"),

    F1111: require("../assets/face/111.png"),
    F1121: require("../assets/face/121.png"),
    F1131: require("../assets/face/131.png"),
    F1141: require("../assets/face/141.png"),
    F1151: require("../assets/face/151.png"),
    F1161: require("../assets/face/161.png"),
    F1101: require("../assets/face/10.png"),

    F1211: require("../assets/face/211.png"),
    F1221: require("../assets/face/221.png"),
    F1231: require("../assets/face/231.png"),
    F1241: require("../assets/face/241.png"),
    F1251: require("../assets/face/251.png"),
    F1261: require("../assets/face/261.png"),
    F1201: require("../assets/face/20.png"),

    F1112: require("../assets/face/112.png"),
    F1122: require("../assets/face/122.png"),
    F1132: require("../assets/face/132.png"),
    F1142: require("../assets/face/142.png"),
    F1152: require("../assets/face/152.png"),
    F1162: require("../assets/face/162.png"),
    F1102: require("../assets/face/10.png"),

    F1212: require("../assets/face/212.png"),
    F1222: require("../assets/face/222.png"),
    F1232: require("../assets/face/232.png"),
    F1242: require("../assets/face/242.png"),
    F1252: require("../assets/face/252.png"),
    F1262: require("../assets/face/262.png"),
    F1202: require("../assets/face/20.png"),
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    const getQuiz = async () => {
      const exp1Doc = await db.collection("exp").doc("exp1").get();
      const exp1Data = exp1Doc.data();
      const shuffledPre = shuffleArray(exp1Data.pre);
      const shuffledLevel1 = shuffleArray(exp1Data.level1);
      const shuffledLevel2 = shuffleArray(exp1Data.level2);
      const shuffledLevel3 = shuffleArray(exp1Data.level3);
      const shuffledLevel4 = shuffleArray(exp1Data.level4);
      const preQuestion = [...shuffledPre];
      questionsRef.current = [...shuffledLevel1, ...shuffledLevel2, ...shuffledLevel3, ...shuffledLevel4];

      setQuestions(preQuestion);
    };

    getQuiz();
  }, []);

  useEffect(() => {
    clickedButtonRef.current = clickedButton;
    lastClickedButtonCountRef.current = countRef.current;
  }, [clickedButton]);

  useEffect(() => {
    if (status === "options") {
      let count = 1;
      countRef.current = 0; // TODO: refactor

      const interval = setInterval(() => {
        countRef.current = count;
        count++;

        if (count > 10) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [status]);

  useEffect(() => {
    countRef.current = 0;
    setClickedButton("");
    setEmotions(shuffleArray(["무표정", "기쁨", "놀람", "부끄러움", "불안", "슬픔", "화남"]));
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (questions.length === 0) return;

    if (isPreRef.current && currentQuestionIndex === questions.length) {
      isPreRef.current = false;
      setReadyToStart(true);

      return;
    }

    if (currentQuestionIndex === questions.length) {
      navigation.navigate("SecondExperimentDescription");

      return;
    }

    showNextQuestion();
  }, [currentQuestionIndex, questions]);

  const handleButtonClick = (emotion) => () => {
    setClickedButton(emotion);
  };

  const handleReadyToStartButtonClick = () => {
    setReadyToStart(false);
    setQuestions(questionsRef.current);
    setCurrentQuestionIndex(0);
  };

  const sendSolvedData = (idx, selectedAnswer, reactionTime) => {
    const isCorrectAnswer = selectedAnswer === questions[idx].answer;
    const test = {
      code: questions[idx].code,
      correctNumber: +isCorrectAnswer,
      wrongNumber: +!isCorrectAnswer,
      selectedResponse: selectedAnswer,
      correctRT: isCorrectAnswer ? reactionTime : 0,
      wrongRT: !isCorrectAnswer ? reactionTime : 0,
    };

    db.collection("solve")
      .doc(user)
      .update({
        exp1: firebase.firestore.FieldValue.arrayUnion(test),
      })
      .then(() => {
        console.log("Test added to Firestore successfully.");
      })
      .catch((error) => {
        console.log("Error adding test to Firestore:", error);
      });
  };

  const getEmotionKey = (clickedEmotion) => {
    const emotion = {
      0: "무표정",
      1: "기쁨",
      2: "놀람",
      3: "부끄러움",
      4: "불안",
      5: "슬픔",
      6: "화남",
    };

    const key = Object.keys(emotion).find((k) => emotion[k] === clickedEmotion);

    return key ? parseInt(key) : null;
  };

  const showNextQuestion = () => {
    setStatus("wait");

    setTimeout(() => {
      setStatus("problem");

      setTimeout(() => {
        setStatus("blank");

        setTimeout(() => {
          setStatus("options");

          setTimeout(() => {
            const clickedButtonValue = clickedButtonRef.current;
            const emotionKey = getEmotionKey(clickedButtonValue);
            const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
            sendSolvedData(currentQuestionIndex, emotionKey, lastClickedButtonCountValue);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setStatus("");
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return readyToStart ? (
    <Description image="" titleText="본시행을 시작합니다" contentText="시작 버튼을 누르면 본 시행이 시작됩니다" handleButtonClick={handleReadyToStartButtonClick} buttonText="시작" />
  ) : (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {status === "wait" && <Entypo name="plus" size={80} color="black" />}
        {status === "problem" && <Image style={styles.image} source={images[questions[currentQuestionIndex].code]} />}
        {status === "blank" && <View></View>}
        {status === "options" && (
          <View style={styles.optionButtons}>
            {emotions.map((emotion, index) => (
              <GreenButton key={index} text={emotion} width="40%" onClick={handleButtonClick(emotion)} clicked={clickedButton === emotion} />
            ))}
          </View>
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 100,
    height: 100,
  },

  image: {
    width: 300,
    height: 300,
  },

  optionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});

export default FirstExpScreen;
