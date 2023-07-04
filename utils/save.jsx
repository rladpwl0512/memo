const saveQuizProblems = async () => {
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
      code: "happy1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media",
      answer: 1,
    },
    {
      code: "surprise1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media",
      answer: 2,
    },
    {
      code: "shyness1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media",
      answer: 3,
    },
    {
      code: "anxious1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media",
      answer: 4,
    },
    {
      code: "sadness1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media",
      answer: 5,
    },
    {
      code: "anger1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "neutral1",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
      answer: 0,
    },
  ];
  const level2 = [
    {
      code: "happy2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media",
      answer: 1,
    },
    {
      code: "surprise2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media",
      answer: 2,
    },
    {
      code: "shyness2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media",
      answer: 3,
    },
    {
      code: "anxious2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media",
      answer: 4,
    },
    {
      code: "sadness2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media",
      answer: 5,
    },
    {
      code: "anger2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "neutral2",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
      answer: 0,
    },
  ];
  const level3 = [
    {
      code: "happy3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media",
      answer: 1,
    },
    {
      code: "surprise3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media",
      answer: 2,
    },
    {
      code: "shyness3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media",
      answer: 3,
    },
    {
      code: "anxious3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media",
      answer: 4,
    },
    {
      code: "sadness3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media",
      answer: 5,
    },
    {
      code: "anger3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "neutral3",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
      answer: 0,
    },
  ];
  const level4 = [
    {
      code: "happy4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media",
      answer: 1,
    },
    {
      code: "surprise4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media",
      answer: 2,
    },
    {
      code: "shyness4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media",
      answer: 3,
    },
    {
      code: "anxious4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media",
      answer: 4,
    },
    {
      code: "sadness4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media",
      answer: 5,
    },
    {
      code: "anger4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "neutral4",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
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
