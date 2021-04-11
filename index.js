import { getTrivia } from './trivia-api.js';
import { handleQuestion } from './questions.js';

async function initialize() {
  console.log('Everything working chief');

  const testConst = await getTrivia();
  handleQuestion(testConst);
}

initialize();
