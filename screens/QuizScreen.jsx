import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { db } from "../firebase";
import global from "../styles/globalStyle";

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [status, setStatus] = useState("");

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
        {status === "wait" && <Text>Wait.. {currentQuestionIndex}</Text>}
        {status === "problem" && <Image style={styles.image} source={{ uri: questions[currentQuestionIndex].question }} />}
        {status === "blank" && <View></View>}
        {status === "options" && <Text>{questions[currentQuestionIndex].answer}</Text>}
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
});

export default QuizScreen;
