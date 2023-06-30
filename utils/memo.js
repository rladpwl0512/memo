function a() {
  const getDb = async () => {
    var testDb = await db.collection("quiz").doc("chapter1").get();

    console.log(testDb.data());
  };

  useEffect(() => {
    getDb();
  }, []);

  test = {
    problems: [
      { answer: 1, code: "happy", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fhappy.png?alt=media&token=0f851783-f3e6-4d37-a73b-9f3d12bdfbc0" },
      { answer: 2, code: "surprise", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsurprise.png?alt=media&token=8b17488c-2557-4b24-83ea-175a273e8948" },
      { answer: 3, code: "shyness", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fshy.png?alt=media&token=10d241c4-0383-4e36-8f13-db7b273aab03" },
      { answer: 4, code: "anxious", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fanxious.png?alt=media&token=82df3a94-0d76-49d6-a5dc-857a2d838f06" },
      { answer: 5, code: "sadness", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fsad.png?alt=media&token=4fcddc4e-808e-43aa-ba76-61e9000a6e09" },
      { answer: 6, code: "anger", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fangry.png?alt=media&token=7e64d95f-94fd-4d23-9ace-daf500714413" },
      { answer: 0, code: "neutral", question: "https://firebasestorage.googleapis.com/v0/b/memo-59b8a.appspot.com/o/chapter1%2Fnormal.png?alt=media&token=630970db-6e78-48dd-9fd2-4d06f5e6723b" },
    ],
  };
}
