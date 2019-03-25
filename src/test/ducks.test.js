import reducer, { LOADED_MARVELS, LOADED_MARVEL, RESET_MARVEL, FETCHING } from '../ducks';

describe('ducks', () => {
  describe('reducer', () => {
    const state = {test: 'test'};

    it('Should return an object with empty marvels array', () => {
      expect(reducer(undefined, {})).toEqual({marvels: []});
    })

    it('Should return the initial state', () => {
      expect(reducer(state, {})).toEqual(state);
    })

    it('Should handle LOADED_MARVELS', () => {
      const payload = {test: 'test'};
      const action = {
        type: LOADED_MARVELS,
        payload,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        marvels: payload,
        isFetching: false,
      });
    })

    it('Should handle LOADED_MARVEL', () => {
      const payload = {test: 'test'};
      const action = {
        type: LOADED_MARVEL,
        payload,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        currentMarvel: payload,
        isFetching: false,
      });
    })

    it('Should handle RESET_MARVEL', () => {
      const action = {
        type: RESET_MARVEL,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        currentMarvel: null,
      });
    })

    it('Should handle FETCHING', () => {
      const action = {
        type: FETCHING,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        isFetching: true,
      });
    })
  })
})
