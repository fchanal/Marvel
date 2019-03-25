export const LOADED_MARVELS = 'LOADED_MARVELS';
export const LOADED_MARVEL = 'LOADED_MARVEL';
export const RESET_MARVEL = 'RESET_MARVEL';
export const FETCHING = 'FETCHING';

export default (state = {marvels: []}, action) => {
  switch (action.type) {
    case LOADED_MARVELS:
      return {...state, marvels: action.payload, isFetching: false};
    case LOADED_MARVEL:
      return {...state, currentMarvel: action.payload, isFetching: false};
    case RESET_MARVEL:
      return {...state, currentMarvel: null};
    case FETCHING:
      return {...state, isFetching: true};
    default:
      return state;
  }
}

export const loadedMarvels = (marvels) => ({type: LOADED_MARVELS, payload: marvels});
export const loadedMarvel = (marvel) => ({type: LOADED_MARVEL, payload: marvel});
export const reset = () => ({type: RESET_MARVEL});
export const fetchMarvel = () => ({type: FETCHING});
