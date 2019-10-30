import {
  forecastSearch,
  cities
} from '../modules';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
  forecastSearch,
  cities
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);

  return finalState;
}