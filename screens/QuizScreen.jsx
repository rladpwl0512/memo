import React, { useEffect, useState, useContext, useRef } from "react";
import { View, Image, StyleSheet } from "react-native";
import { db, firebase } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import GreenButton from "../components/GreenButton";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";

const QuizScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [lastClickedButtonCount, setLastClickedButtonCount] = useState(0);
  const [clickedButton, setClickedButton] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [emotions, setEmotions] = useState([]);

  const countRef = useRef(0);
  const clickedButtonRef = useRef(null);
  const lastClickedButtonCountRef = useRef(null);

  useEffect(() => {
    clickedButtonRef.current = clickedButton;
    lastClickedButtonCountRef.current = lastClickedButtonCount;
  }, [clickedButton]);

  // 테스트용
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    // clickedButton이 눌려질 때마다 -> count 세팅 (마지막 count를 데이터로 사용)
    if (status === "options") {
      let count = 1;
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
    const getQuiz = async () => {
      const quizDb = await db.collection("quiz").doc("chapter1").get();
      const shuffledQuestions = shuffleArray(quizDb.data().problems);
      setQuestions(shuffledQuestions);
    };

    getQuiz();
  }, []);

  useEffect(() => {
    // 초기화
    setClickedButton("");
    setLastClickedButtonCount(0);
    // 이것도 따로해야함?
    countRef.current = 0;
    clickedButtonRef.current = 0;
    lastClickedButtonCountRef.current = 0;
    setEmotions(shuffleArray(["무표정", "행복", "놀람", "부끄러움", "불안", "슬픔", "화남"]));
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (questions.length === 0) return;

    if (currentQuestionIndex === questions.length) {
      navigation.navigate("SecondExperimentDescription");

      return;
    }
    showNextQuestion();
  }, [currentQuestionIndex, questions]);

  const handleButtonClick = (emotion) => () => {
    setLastClickedButtonCount(countRef.current);
    setClickedButton(emotion);
  };

  const sendSolvedData = (idx, emotionIdx, reactionTime) => {
    const isCorrectAnswer = emotionIdx === questions[idx].answer;
    const test = {
      code: questions[idx].code,
      correctNumber: +isCorrectAnswer,
      wrongNumber: +!isCorrectAnswer,
      selectedResponse: emotionIdx,
      correctRT: isCorrectAnswer ? reactionTime : 0,
      wrongRT: !isCorrectAnswer ? reactionTime : 0,
    };

    console.log(test);

    db.collection("solve")
      .doc(user)
      .update({
        first: firebase.firestore.FieldValue.arrayUnion(test),
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
      1: "행복",
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
            // 데이터 보내기
            const clickedButtonValue = clickedButtonRef.current;
            const emotionKey = getEmotionKey(clickedButtonValue);
            const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
            sendSolvedData(currentQuestionIndex, emotionKey, lastClickedButtonCountValue);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setStatus("");
          }, 10000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {status === "wait" && <Entypo name="plus" size={80} color="black" />}
        {status === "problem" && <Image style={styles.image} source={{ uri: questions[currentQuestionIndex].question }} />}
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
    width: 200,
    height: 200,
  },

  optionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});

export default QuizScreen;
