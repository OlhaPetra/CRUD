//READ - GET - ЧТЕНИЕ//

const BASE_URL = 'http://localhost:1315'

function fetchPersons() {
  return fetch(`${BASE_URL}/profile`)
    .then(res => res.json())
    .then(console.log);
}


function fetchPersonById(personId) {
  return fetch(`${BASE_URL}/profile/${personId}`)
    .then(res => res.json())
    .then(console.log);
}

fetchPersons();
fetchPersonById(3)
fetchPersonById(1)