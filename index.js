import { getTrivia } from './trivia-api.js';
import { handleQuestion } from './questions.js';
import { setCounter } from './ux.js';

function initialize() {
  const $startButton = document.querySelector('#start-trivia');

  $startButton.addEventListener('click', e => startTrivia(e));
}

async function startTrivia(e) {
  e.preventDefault();
  /* user selects difficulty */
  let difficulty;
  const userDifficulty = document.querySelector(
    'input[name="difficulty"]:checked'
  );
  /* don't compare using typeof because for null == object */
  if (userDifficulty == null) {
    difficulty = 'easy';
  } else {
    difficulty = userDifficulty.value;
  }
  /* Get the full trivia */
  const trivia = await getTrivia(difficulty);
  setCounter(trivia.length);
  handleQuestion(trivia);

  listenToUser(trivia);
}

function listenToUser(trivia) {
  /* As the "Next" btn is created after this function is called, listen to the body */
  document.body.addEventListener('click', e => {
    if (e.target.id == 'new-question') {
      e.preventDefault();
      handleQuestion(trivia, false);
    }
  });
}

initialize();
