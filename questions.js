function shuffleAnswers(correctAnswer, incorrectAnswers) {
  const shuffledAnswers = [correctAnswer, ...incorrectAnswers];
  // at first the answers are ordered
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    //Hold the original value at the index
    let tempHolder = shuffledAnswers[i];
    //Assign the random value
    shuffledAnswers[i] = shuffledAnswers[randIndex];
    // put the original index value in the random generated
    shuffledAnswers[randIndex] = tempHolder;
  }

  return shuffledAnswers;
}

function isAnswerCorrect(userAnswer, question) {}

function handleQuestion(trivia) {
  if (!trivia.length) {
    console.log('trivia arr is empty');
    return;
  }

  const lastQuestion = trivia[trivia.length - 1];

  // Push the lastQuestion.question to the html (Probably an h1/h2)

  const shuffledAnswers = shuffleAnswers(
    lastQuestion.correct_answer,
    lastQuestion.incorrect_answers
  );

  // push the shuffledAnswers to the html (A radio button or li, idk yet)
  console.log('Shuffled answers should be different than original order');

  console.log(shuffledAnswers);
  console.log([lastQuestion.correct_answer, ...lastQuestion.incorrect_answers]);
}

function deleteQuestion(trivia) {
  trivia.pop();

  return trivia;
}

export { handleQuestion };
