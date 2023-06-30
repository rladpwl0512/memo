const saveQuizProblems = async () => {
  const quizProblems1 = [
    {
      code: "happy",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media",
      answer: 1,
    },
    {
      code: "surprise",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media",
      answer: 2,
    },
    {
      code: "shyness",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media",
      answer: 3,
    },
    {
      code: "anxious",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media",
      answer: 4,
    },
    {
      code: "sadness",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media",
      answer: 5,
    },
    {
      code: "anger",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media",
      answer: 6,
    },
    {
      code: "neutral",
      question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media",
      answer: 0,
    },
  ];
  await db.collection("quiz").doc("chapter1").set({ problems: quizProblems1 });

  const quizProblems2 = [
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
  await db.collection("quiz").doc("chapter2").set({ problems: quizProblems2 });
};

saveQuizProblems()
  .then(() => console.log("Quiz problems saved successfully."))
  .catch((error) => console.error("Error saving quiz problems:", error));

[
  { answer: 2, code: "surprise", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media&token=8b17488c-2557-4b24-83ea-175a273e8948" },
  { answer: 3, code: "shyness", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media&token=10d241c4-0383-4e36-8f13-db7b273aab03" },
  { answer: 1, code: "happy", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media&token=0f851783-f3e6-4d37-a73b-9f3d12bdfbc0" },
  { answer: 5, code: "sadness", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media&token=4fcddc4e-808e-43aa-ba76-61e9000a6e09" },
  { answer: 0, code: "neutral", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media&token=630970db-6e78-48dd-9fd2-4d06f5e6723b" },
  { answer: 6, code: "anger", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media&token=7e64d95f-94fd-4d23-9ace-daf500714413" },
  { answer: 4, code: "anxious", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media&token=82df3a94-0d76-49d6-a5dc-857a2d838f06" },
];
