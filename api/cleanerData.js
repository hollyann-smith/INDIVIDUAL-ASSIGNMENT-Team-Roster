import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCleaners = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cleaners.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCleaner = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cleaners/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createCleaner = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cleaners.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCleaner = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cleaners/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleCleaner = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cleaners/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCleaners, deleteCleaner, updateCleaner, createCleaner, getSingleCleaner,
};
