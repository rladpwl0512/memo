const saveQuizProblems = async () => {
  const pre = [
    {
      code: "P_1",
      answer: 6,
    },
    {
      code: "P_2",
      answer: 0,
    },
  ];
  const level1 = [
    {
      code: "F1111",
      answer: 1,
    },
    {
      code: "F1121",
      answer: 2,
    },
    {
      code: "F1131",
      answer: 3,
    },
    {
      code: "F1141",
      answer: 4,
    },
    {
      code: "F1151",
      answer: 5,
    },
    {
      code: "F1161",
      answer: 6,
    },
    {
      code: "F1101",
      answer: 0,
    },
  ];
  const level2 = [
    {
      code: "F1211",
      answer: 1,
    },
    {
      code: "F1221",
      answer: 2,
    },
    {
      code: "F1231",
      answer: 3,
    },
    {
      code: "F1241",
      answer: 4,
    },
    {
      code: "F1251",
      answer: 5,
    },
    {
      code: "F1261",
      answer: 6,
    },
    {
      code: "F1201",
      answer: 0,
    },
  ];
  const level3 = [
    {
      code: "F1112",
      answer: 1,
    },
    {
      code: "F1122",
      answer: 2,
    },
    {
      code: "F1132",
      answer: 3,
    },
    {
      code: "F1142",
      answer: 4,
    },
    {
      code: "F1152",
      answer: 5,
    },
    {
      code: "F1162",
      answer: 6,
    },
    {
      code: "F1102",
      answer: 0,
    },
  ];
  const level4 = [
    {
      code: "F1212",
      answer: 1,
    },
    {
      code: "F1222",
      answer: 2,
    },
    {
      code: "F1232",
      answer: 3,
    },
    {
      code: "F1242",
      answer: 4,
    },
    {
      code: "F1252",
      answer: 5,
    },
    {
      code: "F1262",
      answer: 6,
    },
    {
      code: "F1202",
      answer: 0,
    },
  ];

  await db.collection("exp").doc("exp1").set({ pre, level1, level2, level3, level4 });
};

saveQuizProblems()
  .then(() => console.log("Quiz problems saved successfully."))
  .catch((error) => console.error("Error saving quiz problems:", error));

const saveQuizProblems2 = async () => {
  const pre = [
    {
      code: "pre1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "pre2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
      answer: 0,
    },
  ];
  const level1 = [
    {
      code: "happy",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level2 = [
    {
      code: "happy2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level3 = [
    {
      code: "happy3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level4 = [
    {
      code: "happy4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];

  await db.collection("exp").doc("exp2").set({ pre, level1, level2, level3, level4 });
};

saveQuizProblems2()
  .then(() => console.log("Quiz problems saved successfully."))
  .catch((error) => console.error("Error saving quiz problems:", error));

const saveQuizProblems3 = async () => {
  const pre = [
    {
      code: "pre1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 6,
    },
    {
      code: "pre2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 0,
    },
  ];
  const level11 = [
    {
      code: "happy11",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious11",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness11",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger11",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level12 = [
    {
      code: "happy12",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious12",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness12",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger12",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level21 = [
    {
      code: "happy21",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious21",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness21",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger21",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level22 = [
    {
      code: "happy22",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious22",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness22",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger22",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level31 = [
    {
      code: "happy31",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious31",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness31",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger31",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level32 = [
    {
      code: "happy32",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious32",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness32",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger32",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level41 = [
    {
      code: "happy41",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious41",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness41",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger41",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  const level42 = [
    {
      code: "happy42",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fhappy.mp3?alt=media",
      answer: 1,
    },
    {
      code: "anxious42",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanxious.mp3?alt=media",
      answer: 4,
    },
    {
      code: "sadness42",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fsad.mp3?alt=media",
      answer: 5,
    },
    {
      code: "anger42",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter2%2Fanger.mp3?alt=media",
      answer: 6,
    },
  ];
  await db.collection("exp").doc("exp3").set({ pre, level11, level12, level21, level22, level31, level32, level41, level42 });
};

saveQuizProblems3()
  .then(() => console.log("Quiz problems saved successfully."))
  .catch((error) => console.error("Error saving quiz problems:", error));
