import { actionTypes } from '../actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return true;
    case actionTypes.CLEAR_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
