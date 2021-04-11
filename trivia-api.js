async function getAPIData(url) {
  const data = await fetch(url)
    .then(r => r.json())
    .catch(r => console.log('OH NO! ' + r));

  console.log('data fetched bruh');

  return data;
}

async function getTrivia() {
  const URL = 'https://opentdb.com/api.php?amount=2&category=9&type=multiple';

  const APIData = await getAPIData(URL);
  const trivia = APIData.results;

  console.log(trivia);

  return trivia;
}

//////////////////////////////

export { getTrivia };
