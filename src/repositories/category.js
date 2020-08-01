import config from '../config';

const { URL } = config;

async function create(category) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Não foi possível gravar os dados');
  });
}

async function getAll() {
  return fetch(URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

async function getAllWithVideos() {
  return fetch(`${URL}?_embed=videos`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
