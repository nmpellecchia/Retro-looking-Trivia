async function getAPIData(url) {
  const data = await fetch(url)
    .then(r => r.json())
    .catch(r => console.log('OH NO! ' + r));

  console.log('data fetched bruh');

  return data;
}

async function getTrivia(difficulty) {
  const amount = '10';
  const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const APIData = await getAPIData(URL);
  const trivia = APIData.results;

  console.log(trivia);

  return trivia;
}

//////////////////////////////

export { getTrivia };
