const $list = document.querySelector('ul.answer-list');

function populateHTML(question, answersList, btnID) {
  const $trivia = document.querySelector('fieldset');
  /* Select and modify the question instead of creating another one*/
  const $question = $trivia.querySelector('legend');
  $question.textContent = question;

  putAnswersInHTML(answersList);

  setButton(btnID);
}

function putAnswersInHTML(answersList) {
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

function setButton(btnID) {
  const $button = document.querySelector('button.trivia-item');

  $button.removeAttribute('id');
  $button.id = `${btnID}-btn`;
  $button.textContent = btnID;
}

function clearTriviaHTML() {
  $list.innerHTML = '';
  const $question = document.querySelector('.question');
  /* Empty the question instead of removing */
  $question.innerHTML = '';
}

function updateCount(newValue) {
  const answeredQuestions = document.querySelector('.answered-questions');
  answeredQuestions.innerHTML = newValue;
}

function setCounter(total) {
  const $trivia = document.querySelector('.trivia');
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

function showScore(score, total) {
  //////////////
  const $scoreMessage = document.querySelector('legend');
  $scoreMessage.innerHTML = `${score}/${total} answers correct. ${getMotivationalMessage(
    score,
    total
  )}`;
  //////////// ADD PLAY AGAIN BUTTON AND MAYBE MSG ACCORDING HOW WELL THEY DID IT
  setButton('restart');
}

function getMotivationalMessage(amount, totalAmount) {
  const percentage = Math.floor((amount / totalAmount) * 100);
  // Get a different message based on the % of correct answers
  if (percentage == 0) {
    return 'Well... everyone has bad days...';
  } else if (percentage <= 33) {
    return "Don't worry. Those questions were hard!";
  } else if (percentage <= 66) {
    return 'Pretty good!';
  } else if (percentage <= 99) {
    return 'Almost perfect!';
  } else {
    return 'You did it! Congratulations!';
  }
}

// Visual updating of the checked item
$list.addEventListener('click', e => {
  let previousChecked = $list.querySelector('.checked') || '';
  previousChecked?.classList?.remove('checked');
  console.log(e.target.parentNode);
  e.target.parentNode.classList.add('checked');
});

export { populateHTML, clearTriviaHTML, updateCount, setCounter, showScore };
