import React, { useEffect, useState, useContext, useRef } from "react";
import { View, Image, StyleSheet } from "react-native";
import { db, firebase } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import GreenButton from "../components/GreenButton";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";
import Description from "../components/Description";
import { images } from "../utils/dataPath";
import disableBack from "../utils/disableBack";

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
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    disableBack();
  }, []);

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
    if (status === "options" && clickedButton) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);

      setTimeout(() => {
        const clickedButtonValue = clickedButtonRef.current;
        const emotionKey = getEmotionKey(clickedButtonValue);
        const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
        sendSolvedData(currentQuestionIndex, emotionKey, lastClickedButtonCountValue);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setStatus("");
      }, 1000);
    }
  }, [clickedButton]);

  useEffect(() => {
    clickedButtonRef.current = clickedButton;
    lastClickedButtonCountRef.current = countRef.current;
  }, [clickedButton]);

  useEffect(() => {
    if (status === "options") {
      let count = 1;
      countRef.current = 0; // TODO: refactor

      intervalRef.current = setInterval(() => {
        countRef.current = count;
        count++;
        console.log(countRef.current);
        // 10초 이전에 clear 되었을 때도 clear 해야함
        if (count > 10) {
          clearInterval(intervalRef.current);
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
      navigation.navigate("SecondSoundCheck");

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

          timeoutRef.current = setTimeout(() => {
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

  return readyToStart ? (
    <Description image="" titleText="본시행을 시작합니다" contentText="시작 버튼을 누르면 본 시행이 시작됩니다" handleButtonClick={handleReadyToStartButtonClick} buttonText="시작" />
  ) : (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {status === "wait" && <Entypo name="plus" size={80} color="black" />}
        {status === "problem" && <Image style={styles.image} source={images[questions[currentQuestionIndex].face]} />}
        {status === "blank" && <View></View>}
        {status === "options" && (
          <View style={styles.optionButtons}>
            {emotions.map((emotion, index) => (
              <GreenButton key={index} text={emotion} width="40%" onClick={handleButtonClick(emotion)} clicked={clickedButton === emotion} isDisabled={clickedButton !== "" && clickedButton !== emotion} />
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
