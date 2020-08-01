const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://agreactflix.herokuapp.com';

export default {
  URL,
};
