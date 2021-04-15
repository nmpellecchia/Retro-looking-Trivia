async function getAPIData(url) {
  const data = await fetch(url)
    .then(r => handleErrors(r))
    .then(r => r.json())
    .catch(r => console.log('OH NO! ' + r));

  return data;
}

async function getTrivia(difficulty) {
  const amount = '3';
  const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const APIData = await getAPIData(URL);
  const trivia = APIData.results;

  return trivia;
}

function handleErrors(resp) {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
}

//////////////////////////////

export { getTrivia };
