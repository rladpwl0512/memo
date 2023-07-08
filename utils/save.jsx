const saveQuizProblems = async () => {
  const pre = [
    {
      code: "P_1",
      face: 22,
      answer: 6,
    },
    {
      code: "P_2",
      face: 16,
      answer: 0,
    },
  ];
  const level1 = [
    {
      code: "F1111",
      face: 111,
      answer: 1,
    },
    {
      code: "F1121",
      face: 121,
      answer: 2,
    },
    {
      code: "F1131",
      face: 131,
      answer: 3,
    },
    {
      code: "F1141",
      face: 141,
      answer: 4,
    },
    {
      code: "F1151",
      face: 151,
      answer: 5,
    },
    {
      code: "F1161",
      face: 161,
      answer: 6,
    },
    {
      code: "F1101",
      face: 10,
      answer: 0,
    },
  ];
  const level2 = [
    {
      code: "F1211",
      face: 211,
      answer: 1,
    },
    {
      code: "F1221",
      face: 221,
      answer: 2,
    },
    {
      code: "F1231",
      face: 231,
      answer: 3,
    },
    {
      code: "F1241",
      face: 241,
      answer: 4,
    },
    {
      code: "F1251",
      face: 251,
      answer: 5,
    },
    {
      code: "F1261",
      face: 261,
      answer: 6,
    },
    {
      code: "F1201",
      face: 20,
      answer: 0,
    },
  ];
  const level3 = [
    {
      code: "F1112",
      face: 112,
      answer: 1,
    },
    {
      code: "F1122",
      face: 122,
      answer: 2,
    },
    {
      code: "F1132",
      face: 132,
      answer: 3,
    },
    {
      code: "F1142",
      face: 142,
      answer: 4,
    },
    {
      code: "F1152",
      face: 152,
      answer: 5,
    },
    {
      code: "F1162",
      face: 162,
      answer: 6,
    },
    {
      code: "F1102",
      face: 10,
      answer: 0,
    },
  ];
  const level4 = [
    {
      code: "F1212",
      face: 212,
      answer: 1,
    },
    {
      code: "F1222",
      face: 222,
      answer: 2,
    },
    {
      code: "F1232",
      face: 232,
      answer: 3,
    },
    {
      code: "F1242",
      face: 242,
      answer: 4,
    },
    {
      code: "F1252",
      face: 252,
      answer: 5,
    },
    {
      code: "F1262",
      face: 262,
      answer: 6,
    },
    {
      code: "F1202",
      face: 20,
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
      code: "P_3",
      voice: "3",
      answer: 1,
    },
    {
      code: "P_4",
      voice: "4",
      answer: 5,
    },
  ];
  const level1 = [
    {
      code: "V1111",
      voice: "111",
      answer: 1,
    },
    {
      code: "V1141",
      voice: "141",
      answer: 4,
    },
    {
      code: "V1151",
      voice: "151",
      answer: 5,
    },
    {
      code: "V1161",
      voice: "161",
      answer: 6,
    },
  ];
  const level2 = [
    {
      code: "V1211",
      voice: "211",
      answer: 1,
    },
    {
      code: "V1241",
      voice: "241",
      answer: 4,
    },
    {
      code: "V1251",
      voice: "251",
      answer: 5,
    },
    {
      code: "V1261",
      voice: "261",
      answer: 6,
    },
  ];
  const level3 = [
    {
      code: "V1112",
      voice: "112",
      answer: 1,
    },
    {
      code: "V1142",
      voice: "142",
      answer: 4,
    },
    {
      code: "V1152",
      voice: "152",
      answer: 5,
    },
    {
      code: "V1162",
      voice: "162",
      answer: 6,
    },
  ];
  const level4 = [
    {
      code: "V1212",
      voice: "212",
      answer: 1,
    },
    {
      code: "V1242",
      voice: "242",
      answer: 4,
    },
    {
      code: "V1252",
      voice: "252",
      answer: 5,
    },
    {
      code: "V1262",
      voice: "262",
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
      code: "P_5",
      voice: 5,
      faceBtn: [21, 24, 25, 26],
      answer: 21,
    },
    {
      code: "P_6",
      voice: 6,
      faceBtn: [11, 14, 15, 16],
      answer: 14,
    },
  ];
  const level11 = [
    {
      code: "M1111",
      voice: 111,
      faceBtn: [111, 141, 151, 161],
      answer: 111,
    },
    {
      code: "M1141",
      voice: 141,
      faceBtn: [111, 141, 151, 161],
      answer: 141,
    },
    {
      code: "M1151",
      voice: 151,
      faceBtn: [111, 141, 151, 161],
      answer: 151,
    },
    {
      code: "M1161",
      voice: 161,
      faceBtn: [111, 141, 151, 161],
      answer: 161,
    },
  ];
  const level12 = [
    {
      code: "M1211",
      voice: 211,
      faceBtn: [211, 241, 251, 261],
      answer: 211,
    },
    {
      code: "M1241",
      voice: 241,
      faceBtn: [211, 241, 251, 261],
      answer: 241,
    },
    {
      code: "M1251",
      voice: 251,
      faceBtn: [211, 241, 251, 261],
      answer: 251,
    },
    {
      code: "M1261",
      voice: 261,
      faceBtn: [211, 241, 251, 261],
      answer: 261,
    },
  ];
  const level21 = [
    {
      code: "M2112",
      voice: 112,
      faceBtn: [112, 142, 152, 162],
      answer: 112,
    },
    {
      code: "M2142",
      voice: 142,
      faceBtn: [112, 142, 152, 162],
      answer: 142,
    },
    {
      code: "M2152",
      voice: 152,
      faceBtn: [112, 142, 152, 162],
      answer: 152,
    },
    {
      code: "M2162",
      voice: 162,
      faceBtn: [112, 142, 152, 162],
      answer: 162,
    },
  ];
  const level22 = [
    {
      code: "M2212",
      voice: 212,
      faceBtn: [212, 242, 252, 262],
      answer: 212,
    },
    {
      code: "M2242",
      voice: 242,
      faceBtn: [212, 242, 252, 262],
      answer: 242,
    },
    {
      code: "M2252",
      voice: 252,
      faceBtn: [212, 242, 252, 262],
      answer: 252,
    },
    {
      code: "M2262",
      voice: 262,
      faceBtn: [212, 242, 252, 262],
      answer: 262,
    },
  ];
  const level31 = [
    {
      code: "M3111",
      voice: 111,
      faceBtn: [112, 142, 152, 162],
      answer: 112,
    },
    {
      code: "M3141",
      voice: 141,
      faceBtn: [112, 142, 152, 162],
      answer: 142,
    },
    {
      code: "M3151",
      voice: 151,
      faceBtn: [112, 142, 152, 162],
      answer: 152,
    },
    {
      code: "M3161",
      voice: 161,
      faceBtn: [112, 142, 152, 162],
      answer: 162,
    },
  ];
  const level32 = [
    {
      code: "M3211",
      voice: 211,
      faceBtn: [212, 242, 252, 262],
      answer: 212,
    },
    {
      code: "M3241",
      voice: 241,
      faceBtn: [212, 242, 252, 262],
      answer: 242,
    },
    {
      code: "M3251",
      voice: 251,
      faceBtn: [212, 242, 252, 262],
      answer: 252,
    },
    {
      code: "M3261",
      voice: 261,
      faceBtn: [212, 242, 252, 262],
      answer: 262,
    },
  ];
  const level41 = [
    {
      code: "M4112",
      voice: 112,
      faceBtn: [111, 141, 151, 161],
      answer: 111,
    },
    {
      code: "M4142",
      voice: 142,
      faceBtn: [111, 141, 151, 161],
      answer: 141,
    },
    {
      code: "M4152",
      voice: 152,
      faceBtn: [111, 141, 151, 161],
      answer: 151,
    },
    {
      code: "M4162",
      voice: 162,
      faceBtn: [111, 141, 151, 161],
      answer: 161,
    },
  ];
  const level42 = [
    {
      code: "M4212",
      voice: 212,
      faceBtn: [211, 241, 251, 261],
      answer: 211,
    },
    {
      code: "M4242",
      voice: 242,
      faceBtn: [211, 241, 251, 261],
      answer: 241,
    },
    {
      code: "M4252",
      voice: 252,
      faceBtn: [211, 241, 251, 261],
      answer: 251,
    },
    {
      code: "M4262",
      voice: 262,
      faceBtn: [211, 241, 251, 261],
      answer: 261,
    },
  ];
  await db.collection("exp").doc("exp3").set({ pre, level11, level12, level21, level22, level31, level32, level41, level42 });
};

saveQuizProblems3()
  .then(() => console.log("Quiz problems saved successfully."))
  .catch((error) => console.error("Error saving quiz problems:", error));
