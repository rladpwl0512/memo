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

  const [clickedButton, setClickedButton] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [emotions, setEmotions] = useState([]);
  const [status, setStatus] = useState("");

  const countRef = useRef(0);
  const clickedButtonRef = useRef(null);
  const lastClickedButtonCountRef = useRef(null);

  useEffect(() => {
    const getQuiz = async () => {
      const quizDb = await db.collection("quiz").doc("chapter1").get();
      const shuffledQuestions = shuffleArray(quizDb.data().problems);
      setQuestions(shuffledQuestions);
    };

    getQuiz();
  }, []);

  useEffect(() => {
    console.log("전: " + countRef.current, clickedButtonRef.current, lastClickedButtonCountRef.current);
    clickedButtonRef.current = clickedButton;
    lastClickedButtonCountRef.current = countRef.current;
    console.log("후: " + countRef.current, clickedButtonRef.current, lastClickedButtonCountRef.current);
  }, [clickedButton]);

  useEffect(() => {
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
    countRef.current = 0;
    setClickedButton("");
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
    setClickedButton(emotion);
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
        chapter1: firebase.firestore.FieldValue.arrayUnion(test),
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
