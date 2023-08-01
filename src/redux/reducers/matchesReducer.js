import { actionTypes } from '../actions';

const initialState = {
  matches: [],
  date: null,
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MATCHES:
      return {
        ...state,
        matches: [...action.payload],
        date: action.date,
      };
    case actionTypes.SELECT_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case actionTypes.CLEAR_MATCHES: // Add this case
      return {
        ...state,
        matches: [], // Clear matches
      };
    default:
      return state;
  }
};

export default matchesReducer;
