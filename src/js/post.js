//POST - CREATE - СОЗДАНИЕ

const BASE_URL = 'http://localhost:1315';

const newPerson = {
  name: 'Danny',
  age: '27',
};

function addPerson(person) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
  };

  return fetch(`${BASE_URL}/profile`, options)
    .then(res => res.json)
    .then(console.log);
}

addPerson({
  name: 'Hanry',
  age: '29',
})
