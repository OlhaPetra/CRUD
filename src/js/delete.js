//DELETE - УДАЛИТЬ

const BASE_URL = 'http://localhost:1315';

function removePersonByPerson(personID) {
    const options = {
        method: 'DELETE'
    }
    return fetch(`${BASE_URL}/profile/${personID}`, options).then(res=>res.json)
}

removePersonByPerson(16)
