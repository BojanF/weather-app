// @flow

import { fork, all } from 'redux-saga/effects';
import {
  forecastSearchSaga,
  citiesSaga  
} from '../modules';

export default function* rootSaga() {
  yield all([
    fork(forecastSearchSaga),
    fork(citiesSaga)
  ]);
}
