import config from '../config';

const { URL } = config;

async function create(category) {
  return fetch(`${URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error to save the data');
  });
}

async function getAll() {
  return fetch(`${URL}/categories`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error to fetch the data');
  });
}

async function getAllWithVideos() {
  return fetch(`${URL}/categories?_embed=videos`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error to fetch the data');
  });
}

async function remove(categoryId) {
  return fetch(`${URL}/categories/${categoryId}`, { method: 'DELETE' }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error to remove the data');
  });
}

export default {
  getAll,
  getAllWithVideos,
  create,
  remove,
};
