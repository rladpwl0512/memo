const shuffleArray = (data) => {
  const shuffledQuestions = [...data];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }
  return shuffledQuestions;
};

export { shuffleArray };
