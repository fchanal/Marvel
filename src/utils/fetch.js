import md5 from 'md5';

const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const BASE_URL = 'http://gateway.marvel.com:80';
const CHARACTERS_URI = '/v1/public/characters';

export const characters = () => new Promise((resolve, reject) => {
  const now = Math.round(+new Date() / 1000);
  const hash = md5(`${now}${API_PRIVATE}${API_PUBLIC}`);

  fetch(`${BASE_URL}${CHARACTERS_URI}?apikey=${API_PUBLIC}&hash=${hash}&ts=${now}`, {
    method: 'get',
  }).then((response) => response.json().then(({ data: { results = [] }}) => resolve(results)))
    .catch(reject)
})
