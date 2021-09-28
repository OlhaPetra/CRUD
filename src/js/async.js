const BASE_URL = 'http://localhost:1315';

async function addPerson() {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
  };

  const response = await fetch(`${BASE_URL}/profile`, options);
  const newPerson = await response.json;
  return newPerson;
}

async function addPersonAndUpdate() {
  try {
    const person = await addPerson({});
    console.log(person);
  } catch (error) {
    console.log(error);
  }
}

addPersonAndUpdate();

async function fetchPersonById(personId) {
  const response = await fetch(`${BASE_URL}/profile/${personId}`);
  const person = response.json();

  return person;
}

async function updatePersonById(update, personId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/profile/${personId}`, options);
  const updatePerson = response.json();
  return updatePerson;
}

async function removePersonByPerson(personID) {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/profile/${personID}`, options);
  const removePerson = response.json();
  return removePerson;
}

function addAndRenderPerson() {
  try {
    const person = addPerson({});
    console.log(person);
  } catch (error) {
    console.log(error);
  }
}
