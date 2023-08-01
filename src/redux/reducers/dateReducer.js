// redux/reducers/dateReducer.js
import { actionTypes } from '../actions';

const initialState = new Date();

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_DATE:
      return action.payload;
    default:
      return state;
  }
};

export default dateReducer;
