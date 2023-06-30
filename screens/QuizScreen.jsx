import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { db } from "../firebase";
import global from "../styles/globalStyle";

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWait, setShowWait] = useState(true);
  const [showProblem, setShowProblem] = useState(false);
  const [showBlank, setShowBlank] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const getQuiz = async () => {
      const quizDb = await db.collection("quiz").doc("chapter1").get();

      const shuffledQuestions = shuffleQuestions(quizDb.data().problems);
      setQuestions(shuffledQuestions);
    };

    getQuiz();
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;

    if (currentQuestionIndex === questions.length) {
      navigation.navigate("SecondExperimentDescription");

      return;
    }
    showNextQuestion();
  }, [currentQuestionIndex, questions]);

  const shuffleQuestions = (questionsData) => {
    const shuffledQuestions = [...questionsData];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions;
  };

  const showNextQuestion = () => {
    // Show the "wait" message for 1 second
    setShowWait(true);
    setShowProblem(false);
    setShowBlank(false);
    setShowOptions(false);

    // Show the problem for 1 second
    setTimeout(() => {
      setShowWait(false);
      setShowProblem(true);

      // Hold the blank screen for 1 second
      setTimeout(() => {
        setShowProblem(false);
        setShowBlank(true);

        // Show the options for 10 seconds
        setTimeout(() => {
          setShowBlank(false);
          setShowOptions(true);

          setTimeout(() => {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setShowOptions(false);

            // Continue to the next question
            // showNextQuestion();
          }, 3000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {showWait && <Text>Wait.. {currentQuestionIndex}</Text>}
        {showProblem && <Image style={styles.icon} source={require("../assets/icon/speaker.png")} />}
        {/* {showProblem && <Image source={{ uri: "https://t1.kakaocdn.net/friends/official/with-kangdaniel/images/img-little-apeach-01.png" }} />} */}
        {/* {showProblem && <Image source={{ uri: questions[currentQuestionIndex].question }} />} */}
        {showBlank && <View></View>}
        {showOptions && <Text>{questions[currentQuestionIndex].answer}</Text>}
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
});

export default QuizScreen;
