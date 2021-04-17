import { getTrivia } from './trivia-api.js';
import { handleQuestion } from './questions.js';
import { setCounter, populateHTML, clearTriviaHTML } from './ux.js';

const $button = document.querySelector('button.trivia-item');
const difficulty = ['easy', 'medium', 'hard'];
let trivia;

async function handleClick(e) {
  e.preventDefault();

  switch (e.target.id) {
    case 'play-btn':
      const userDifficulty = document.querySelector('input:checked');
      // Get the full trivia
      trivia = await getTrivia(userDifficulty.value);
      // Display the counter and start the trivia
      setCounter(trivia.length);
      handleQuestion(trivia);
      break;

    case 'next-btn':
      handleQuestion(trivia, false);
      break;

    default:
      clearTriviaHTML();
      populateHTML('Select difficulty', difficulty, 'play');
      break;
  }
}

$button.addEventListener('click', e => handleClick(e));
