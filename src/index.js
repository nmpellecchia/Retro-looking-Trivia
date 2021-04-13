import { getTrivia } from './trivia-api.js';
import { handleQuestion } from './questions.js';
import { setCounter, populateHTML, clearTriviaHTML } from './ux.js';

const $button = document.querySelector('button.trivia-item');
const difficulty = ['easy', 'medium', 'hard'];
let trivia;

async function handleClick(e) {
  e.preventDefault();

  if (e.target.id.includes('start-btn')) {
    clearTriviaHTML();
    populateHTML('Select difficulty', difficulty, 'play');
  } else if (e.target.id.includes('play-btn')) {
    const userDifficulty = document.querySelector('input:checked');
    // Get the full trivia
    trivia = await getTrivia(userDifficulty.value);
    // Display the counter and start the trivia
    setCounter(trivia.length);
    handleQuestion(trivia);
  } else if (e.target.id.includes('next-btn')) {
    handleQuestion(trivia, false);
  } else {
    clearTriviaHTML();
    populateHTML('Select difficulty', difficulty, 'play');
  }
}

$button.addEventListener('click', e => handleClick(e));

/* function initialize() {
  const $startButton = document.querySelector('#start-trivia');

  $startButton.addEventListener('click', e => startTrivia(e));
}

async function startTrivia(e) {
  e.preventDefault();
  // user selects difficulty
  let difficulty;
  const userDifficulty = document.querySelector(
    'input[name="difficulty"]:checked'
  );
  // don't compare using typeof because for null == object
  if (userDifficulty == null) {
    difficulty = 'easy';
  } else {
    difficulty = userDifficulty.value;
  }
  // Get the full trivia
  const trivia = await getTrivia(difficulty);
  // Display the counter and start the trivia
  setCounter(trivia.length);
  handleQuestion(trivia);

  listenToUser(trivia);
}

function listenToUser(trivia) {
  // As the "Next" btn is created after this function is called, listen to the body
  document.body.addEventListener('click', e => {
    if (e.target.id == 'new-question') {
      e.preventDefault();
      handleQuestion(trivia, false);
    }
  });
}

initialize(); */
