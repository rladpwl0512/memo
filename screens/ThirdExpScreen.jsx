import React, { useEffect, useState, useContext, useRef } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { db, firebase } from "../firebase";
import global from "../styles/globalStyle";
import { shuffleArray } from "../utils/utils";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";
import colors from "../styles/theme";
import Description from "../components/Description";
import { images, voices } from "../utils/dataPath";
import disableBack from "../utils/disableBack";

let clickSound = null;

const setupSound = async () => {
  try {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/click.mp3"), { shouldPlay: false });
    clickSound = sound;
  } catch (error) {
    console.log("Failed to load the sound", error);
  }
};

setupSound();

const ThirdExpScreen = ({ navigation }) => {
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
  const preQuestionsRef = useRef(null);
  const isPreRef = useRef(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    disableBack();
  }, []);

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
      preQuestionsRef.current = [...shuffledPre];
      questionsRef.current = [...shuffledLevel11, ...shuffledLevel12, ...shuffledLevel21, ...shuffledLevel22, ...shuffledLevel31, ...shuffledLevel32, ...shuffledLevel41, ...shuffledLevel42];

      setEmotions(shuffleArray(preQuestionsRef.current[0].faceBtn));
      setQuestions(preQuestionsRef.current);
    };

    getQuiz();
  }, []);

  useEffect(() => {
    if (status === "options" && clickedButton) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);

      setTimeout(() => {
        const clickedButtonValue = clickedButtonRef.current;
        const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
        sendSolvedData(currentQuestionIndex, clickedButtonValue, lastClickedButtonCountValue);
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

        if (count > 10) {
          clearInterval(intervalRef.current);
        }
      }, 1000);
    }
  }, [status]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) return;

    countRef.current = 0;
    setClickedButton("");
    questions.length && setEmotions(shuffleArray(questions[currentQuestionIndex].faceBtn));
  }, [currentQuestionIndex]);

  useEffect(() => {
    console.log(isPreRef.current, currentQuestionIndex, questions.length, status);
    if (questions.length === 0) return;

    if (isPreRef.current && currentQuestionIndex === questions.length) {
      isPreRef.current = false;
      setReadyToStart(true);

      return;
    }

    if (currentQuestionIndex === questions.length) {
      navigation.navigate("Finish");

      return;
    }
    showNextQuestion();
  }, [currentQuestionIndex, questions]);

  const playClickSound = async () => {
    try {
      if (clickSound) {
        await clickSound.replayAsync();
      }
    } catch (error) {
      console.log("Failed to play the sound", error);
    }
  };

  const handlePressIn = () => {
    playClickSound();
  };

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
        exp3: firebase.firestore.FieldValue.arrayUnion(test),
      })
      .then(() => {
        console.log("Test added to Firestore successfully.");
      })
      .catch((error) => {
        console.log("Error adding test to Firestore:", error);
      });
  };

  const playAudio = async (audioFile, callback) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFile, { shouldPlay: true });

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync().then(() => {
            console.log("Audio unloaded");
          });

          setStatus("blank");

          setTimeout(() => {
            setStatus("options");
            callback();
          }, 1000);
        }
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
      const audioFile = voices[currentQuestion.voice];

      playAudio(audioFile, () => {
        timeoutRef.current = setTimeout(() => {
          const clickedButtonValue = clickedButtonRef.current;
          const lastClickedButtonCountValue = lastClickedButtonCountRef.current;
          sendSolvedData(currentQuestionIndex, clickedButtonValue, lastClickedButtonCountValue);
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setStatus("");
        }, 10000);
      });
    }, 1000);
  };

  return readyToStart ? (
    <Description image="" titleText="본시행을 시작합니다" contentText="시작 버튼을 누르면 본 시행이 시작됩니다" handleButtonClick={handleReadyToStartButtonClick} buttonText="시작" />
  ) : (
    currentQuestionIndex < questions.length && (
      <View style={[global.container, styles.container]}>
        {status === "wait" && <Entypo name="plus" size={80} color="black" />}
        {status === "problem" && <Image style={styles.image} source={require("../assets/icon/speaker.png")} />}
        {status === "blank" && <View></View>}
        {status === "options" && (
          <View style={styles.optionButtons}>
            {emotions.map((emotion, index) => (
              <Pressable key={index} onPressIn={handlePressIn} onPress={handleButtonClick(emotion)} style={({ pressed }) => [pressed && styles.pressed, clickedButton === emotion && styles.clickedContainer, styles.emotionButton]}>
                <Image source={images[emotion]} style={[styles.emotionImg]} />
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
    objectFit: "contain",
  },

  pressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.5,
  },

  clickedContainer: {
    backgroundColor: colors.PRIMARY_100,
    borderRadius: 20,
  },
});

export default ThirdExpScreen;
