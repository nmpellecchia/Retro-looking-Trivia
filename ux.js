function populateHTML(question, answersList) {
  const $button = document.querySelector('button.trivia-item');
  const $trivia = document.querySelector('.trivia');
  /* Put the question inside h1 element */
  const trivia = document.querySelector('.trivia');
  const $question = document.createElement('legend');
  $question.classList.add('trivia-item', 'question');
  $question.textContent = question;

  trivia.appendChild($question);

  putAnswersInHTML(answersList);

  $button.remove();
  const $nextQuestion = document.createElement('button');
  $nextQuestion.type = 'submit';
  $nextQuestion.classList.add('trivia-item');
  $nextQuestion.id = 'new-question';
  $nextQuestion.textContent = 'Next';
  $trivia.appendChild($nextQuestion);
}

function putAnswersInHTML(answersList) {
  const $list = document.querySelector('ul.answer-list');
  for (let i = 0; i <= answersList.length - 1; i++) {
    const $item = document.createElement('li');
    $item.classList.add(`answer-${i}`);
    /* add the input and label */
    const $selector = document.createElement('input');
    $selector.type = 'radio';
    $selector.name = 'answer';
    $selector.id = `a${i}`;
    $selector.value = answersList[i];
    const $text = document.createElement('label');
    $text.htmlFor = `a${i}`;
    $text.textContent = answersList[i];
    /* put the input $ label inside $item */
    $item.appendChild($selector);
    $item.appendChild($text);
    /* put the item inside the list */
    $list.appendChild($item);
  }
}

function clearTriviaHTML() {
  const $list = document.querySelector('ul.answer-list');
  $list.innerHTML = '';
  const $question = document.querySelector('.question');
  $question.remove();
}

function updateCount(newValue) {
  const answeredQuestions = document.querySelector('.answered-questions');
  answeredQuestions.innerHTML = newValue;
}

function setCounter(total) {
  const $trivia = document.querySelector('.trivia-wrapper');
  //
  const $counter = document.createElement('div');
  $counter.classList.add('counter');
  //
  const $answeredQuestions = document.createElement('p');
  $answeredQuestions.classList.add('answered-questions');
  $answeredQuestions.innerHTML = 0;
  //
  const $divisor = document.createElement('p');
  $divisor.classList.add('divisor');
  $divisor.innerHTML = '/';
  //
  const $totalQuestions = document.createElement('p');
  $totalQuestions.classList.add('total-questions');
  $totalQuestions.innerHTML = total;
  //
  $counter.appendChild($answeredQuestions);
  $counter.appendChild($divisor);
  $counter.appendChild($totalQuestions);
  //
  $trivia.appendChild($counter);
}

function showScore(score) {
  const $counter = document.querySelector('.counter');
  const $answeredQuestions = document.querySelector('.answered-questions');
  //
  $counter.classList.add('total-score');
  $answeredQuestions.innerHTML = score;
}

export { populateHTML, clearTriviaHTML, updateCount, setCounter, showScore };
