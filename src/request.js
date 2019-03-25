import axios from 'axios';
import md5 from 'md5';

const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const BASE_URL = 'http://gateway.marvel.com:80';
const CHARACTERS_URI = '/v1/public/characters';

const currentDate = () => Math.round(+new Date() / 1000);
const makeHash = (date, publicKey, privateKey) => md5(`${date}${privateKey}${publicKey}`);

const makeMarvelsUrl = (baseUrl, charactersUri, publicKey, privateKey, date) => `${baseUrl}${charactersUri}?apikey=${publicKey}&hash=${makeHash(date, publicKey, privateKey)}&ts=${date}`;
const makeMarvelUrl = (baseUrl, charactersUri, publicKey, privateKey, date, id) => `${baseUrl}${charactersUri}/${id}?apikey=${publicKey}&hash=${makeHash(date, publicKey, privateKey)}&ts=${date}`;

export const requestMarvels = () => axios.get(makeMarvelsUrl(BASE_URL, CHARACTERS_URI, API_PUBLIC, API_PRIVATE, currentDate()))
  .then(({ data: { data: { results } } }) => results);

export const requestMarvelId = (id) => axios.get(makeMarvelUrl(BASE_URL, CHARACTERS_URI, API_PUBLIC, API_PRIVATE, currentDate(), id))
    .then(({ data: { data: { results } } }) => results[0]);
