const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080/categories'
  : 'https://agreactflix.herokuapp.com/categories';

export default {
  URL,
};
