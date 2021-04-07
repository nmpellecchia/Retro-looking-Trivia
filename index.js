import { getTrivia } from './trivia-api.js';
import { handleQuestion } from './questions.js';

function initialize() {
  const $startButton = document.querySelector('#start-trivia');

  $startButton.addEventListener('click', e => startTrivia(e));
}

async function startTrivia(e) {
  e.preventDefault();
  /* Get the full trivia */
  const trivia = await getTrivia();
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
