import { populateHTML, clearTriviaHTML, updateCount, showScore } from './ux.js';

////////////////////////////
/////////////////////////////
/////////////////////////////
// NEED TO RESET SCORES!!!
let score = 0;
let totalCount = 0;

function shuffleAnswers(correctAnswer, incorrectAnswers) {
  const shuffledAnswers = [correctAnswer, ...incorrectAnswers];

  // In case there are encoded symbols:
  for (let i = 0; i < shuffledAnswers.length; i++) {
    shuffledAnswers[i] = decodeHTML(shuffledAnswers[i]);
  }

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

  // update user score if answered correctly
  if (userAnswer.value == answer) {
    score++;
  }
  // update the total amount of answered questions
  totalCount++;
  updateCount(totalCount);
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
    clearTriviaHTML();
    showScore(score, totalCount);

    score = 0;
    totalCount = 0;
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
  /* The question has to be decoded in case there are encoded symbols (Answers are done inside shuffleAnswers() ) */
  populateHTML(decodeHTML(newQuestion.question), shuffledAnswers, 'next');

  ///////////////////////////
  decodeHTML(newQuestion.question);
}

function deleteQuestion(trivia) {
  trivia.pop();

  return trivia;
}

function decodeHTML(element) {
  // Putting the element inside a html element to decode characters like &quot and similars
  let areaElement = document.createElement('textarea');
  areaElement.innerHTML = element;
  // I put the value inside another variable to be able to delete the element created
  const value = areaElement.value;

  areaElement.remove();

  return value;
}

export { handleQuestion };
