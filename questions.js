import { populateHTML, clearTriviaHTML } from './ux.js';

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

function isAnswerCorrect(answer) {
  const userAnswer = document.querySelector('input[name="answer"]:checked');

  if (userAnswer.value == answer) {
    console.log('correct!');
  } else {
    console.log('BUUUUUU');
  }
}

function handleQuestion(trivia, firstTime = true) {
  const lastQuestion = trivia[trivia.length - 1];
  /* If the trivia has already started check the answer and pop the question from the array */
  if (!firstTime) {
    isAnswerCorrect(lastQuestion.correct_answer);
    deleteQuestion(trivia);
  }
  /* Now that the user input has been handled, check if there's another question */
  if (!trivia.length) {
    console.log('trivia arr is empty');
    return;
  }
  /* Clear the HTML to avoid any problems */
  clearTriviaHTML();

  const newQuestion = trivia[trivia.length - 1];
  const shuffledAnswers = shuffleAnswers(
    newQuestion.correct_answer,
    newQuestion.incorrect_answers
  );

  /* Add the newQuestion and possible answers inside the HTML */
  populateHTML(newQuestion.question, shuffledAnswers);
  /* 
  // push the shuffledAnswers to the html (A radio button or li, idk yet)
  console.log('Shuffled answers should be different than original order');

  console.log(shuffledAnswers);
  console.log([newQuestion.correct_answer, ...newQuestion.incorrect_answers]);

  console.log('question');
  console.log(newQuestion.question); */
}

function deleteQuestion(trivia) {
  trivia.pop();

  return trivia;
}

export { handleQuestion };
