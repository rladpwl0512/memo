import React, { useEffect, useState, useContext, useRef } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { db, firebase } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";
import colors from "../styles/theme";

const ThirdExpScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const [clickedButton, setClickedButton] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [emotions, setEmotions] = useState([]);
  const [status, setStatus] = useState("");

  const countRef = useRef(0);
  const clickedButtonRef = useRef(null);
  const lastClickedButtonCountRef = useRef(null);

  // TODO: firebase에 저장?
  const images = {
    기쁨: require("../assets/emotions/happy.png"),
    불안: require("../assets/emotions/anxious.png"),
    슬픔: require("../assets/emotions/sadness.png"),
    화남: require("../assets/emotions/anger.png"),
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    const getQuiz = async () => {
      const exp3Doc = await db.collection("exp").doc("exp3").get();
      const exp3Data = exp3Doc.data();
      const shuffledPre = shuffleArray(exp3Data.pre);
      const shuffledLevel11 = shuffleArray(exp3Data.level11);
      const shuffledLevel12 = shuffleArray(exp3Data.level12);
      const shuffledLevel21 = shuffleArray(exp3Data.level21);
      const shuffledLevel22 = shuffleArray(exp3Data.level22);
      const shuffledLevel31 = shuffleArray(exp3Data.level31);
      const shuffledLevel32 = shuffleArray(exp3Data.level32);
      const shuffledLevel41 = shuffleArray(exp3Data.level41);
      const shuffledLevel42 = shuffleArray(exp3Data.level42);
      const allQuestions = [...shuffledPre, ...shuffledLevel11, ...shuffledLevel12, ...shuffledLevel21, ...shuffledLevel22, ...shuffledLevel31, ...shuffledLevel32, ...shuffledLevel41, ...shuffledLevel42];

      setQuestions(allQuestions);
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
    setEmotions(shuffleArray(["기쁨", "불안", "슬픔", "화남"]));
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (questions.length === 0) return;

    if (currentQuestionIndex === questions.length) {
      navigation.navigate("Finish");

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
        exp3: firebase.firestore.FieldValue.arrayUnion(test),
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
      1: "기쁨",
      4: "불안",
      5: "슬픔",
      6: "화남",
    };

    const key = Object.keys(emotion).find((k) => emotion[k] === clickedEmotion);

    return key ? parseInt(key) : null;
  };
  const playAudio = (audioFile, callback) => {
    try {
      Audio.Sound.createAsync({ uri: audioFile }, { shouldPlay: true }).then(({ sound }) => {
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            console.log("finish");
            setStatus("blank");

            setTimeout(() => {
              setStatus("options");
              callback();
            }, 1000);
          }
        });
      });
    } catch (error) {
      console.log("Failed to play the audio", error);
    }
  };

  const showNextQuestion = () => {
    setStatus("wait");

    setTimeout(() => {
      setStatus("problem");

      const currentQuestion = questions[currentQuestionIndex];
      const audioFile = currentQuestion.question;

      playAudio(audioFile, () => {
        setTimeout(() => {
          const clickedButtonValue = clickedButtonRef.current;
          const emotionKey = getEmotionKey(clickedButtonValue);
          const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
          sendSolvedData(currentQuestionIndex, emotionKey, lastClickedButtonCountValue);
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setStatus("");
        }, 10000);
      });
    }, 1000);
  };

  return (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {status === "wait" && <Entypo name="plus" size={80} color="black" />}
        {status === "problem" && <Image style={styles.image} source={require("../assets/icon/speaker.png")} />}
        {status === "blank" && <View></View>}
        {status === "options" && (
          <View style={styles.optionButtons}>
            {emotions.map((emotion, index) => (
              <Pressable key={index} onPress={handleButtonClick(emotion)} style={({ pressed }) => [pressed && styles.pressed, clickedButton === emotion && styles.clickedContainer, styles.emotionButton]}>
                <Image source={images[emotion]} style={[styles.emotionImg, clickedButton === emotion && styles.clickedImg]} />
              </Pressable>
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

  emotionButton: {
    width: "40%",
    aspectRatio: 1,
  },

  emotionImg: {
    width: "100%",
    height: "100%",
  },

  pressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.5,
  },

  clickedContainer: {
    backgroundColor: colors.BLACK,
  },

  clickedImg: {
    opacity: 0.8,
  },
});

export default ThirdExpScreen;
