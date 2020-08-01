import config from '../config';

const { URL } = config;

async function create(video) {
  return fetch(`${URL}/videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('There was an error to save the data');
  });
}

export default {
  create,
};
