// redux/reducers/index.js
import { combineReducers } from 'redux';
import scoresReducer from './scoresReducer';
import teamsReducer from './teamsReducer';
import matchesReducer from './matchesReducer';
import loadingReducer from './loadingReducer';
import dateReducer from './dateReducer'; // Import the new reducer

const rootReducer = combineReducers({
  scores: scoresReducer,
  teams: teamsReducer,
  matches: matchesReducer,
  loading: loadingReducer,
  selectedDate: dateReducer, // Add the new reducer here
});

export default rootReducer;
