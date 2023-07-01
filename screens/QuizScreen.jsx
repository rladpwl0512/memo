import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { db } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import GreenButton from "../components/GreenButton";
import { Entypo } from "@expo/vector-icons";

const QuizScreen = ({ navigation }) => {
  const [clickedButton, setClickedButton] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const getQuiz = async () => {
      const quizDb = await db.collection("quiz").doc("chapter1").get();
      const shuffledQuestions = shuffleArray(quizDb.data().problems);
      setQuestions(shuffledQuestions);
    };

    getQuiz();
  }, []);

  useEffect(() => {
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

  const showNextQuestion = () => {
    setStatus("wait");

    setTimeout(() => {
      setStatus("problem");

      setTimeout(() => {
        setStatus("blank");

        setTimeout(() => {
          setStatus("options");

          setTimeout(() => {
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

        {/* 
        - 7개의 선택지를 랜덤으로 보여준다 (각 선택지별로, key가 있음. key에 따라 text를 변경)
        - 선택을 했을 때, questions[currentQuestionIndex].answer === key와 일치하는지 확인한다.
        - 데이터를 보낸다 
        */}

        {status === "options" && (
          <View style={styles.optionButtons}>
            {emotions.map((emotion, index) => (
              <GreenButton text={emotion} width="40%" onClick={handleButtonClick(emotion)} clicked={clickedButton === emotion} />
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
