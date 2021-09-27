//PATCH - UPDATE - ОБНОВИТЬ

const BASE_URL = 'http://localhost:1315';

function updatePersonById(update, personId) {
  const options = {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(update),
    };

  return  fetch(`${BASE_URL}/profile/${personId}`, options)
  .then(res => res.json)
  .then(console.log);
}
  
updatePersonById({ name: 'Lusi' }, 12);

updatePersonById({ name: 'George' }, 14);