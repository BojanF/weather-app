import {
    put,
    fork,
    all,
    take,
    call
} from 'redux-saga/effects';

import {
    forecastSearchActionCreators,
    GET_FORECAST_SEARCH,
    STORE_FORECAST_SEARCH,
    GET_SEARCH_HISTORY_ENTRY
} from './actions';

import { OpenWeatherApi } from '../../../services';

export function* asyncGetForecastSearch ({ payload, resolve, reject }) {
    const { city } = payload;
    console.log('SAGA: FORECAST_SEARCH', city);
    try {        
        const response = yield call(OpenWeatherApi, 
        {
            api: `/data/2.5/forecast?q=${city}&units=metric`,
            method: 'GET',
        });

        if (response.result === 'ok') {
            console.log('SYNC BF');
            yield put(forecastSearchActionCreators.getForecastSearchSuccess({ forecast: response.forecast }));
            resolve(response.forecast);
        } else {
            console.log('SYNC BF ERR');
            reject(response.error);
        }
    } catch (e) {
        console.log(e);
        reject(e);
    }
}

export function* asyncStoreForecastSearch ({ payload, resolve, reject }) {
    const { forecast } = payload;
    console.log('SAGA: STORE_FORECAST_SEARCH');
    try {        
        const response = 
        {
            result: 'ok'
        };

        if (response.result === 'ok') {
            yield put(forecastSearchActionCreators.storeForecastSearchSuccess({ forecast }));
            resolve('Forecast stored');
        } else {
            reject('Store error BF');
        }
    } catch (e) {
        console.log(e);
        reject(e);
    }
}

export function* asyncGetSearchHistoryEntry ({ payload, resolve, reject }) {
    const { forecastId } = payload;
    console.log('SAGA: GET_SEARCH_HISTORY_ENTRY -> ', forecastId);
    try {        
        // Here should be http call to the server
        const response = {
            result: 'ok'
        }
        if (response.result === 'ok') {
            yield put(forecastSearchActionCreators.getSearchHistoryEntrySuccess({ forecastId }));
            resolve('Succesfully fetched recipe');
        } else {
            reject("ERROR")
        }
    } catch (e) {
        console.log(e);
        reject(e);
    }
}

export function* watchGetForecastSearch() {
    while (true) {
        const action = yield take(GET_FORECAST_SEARCH);
        yield* asyncGetForecastSearch(action)
    }
}

export function* watchStoreForecastSearch() {
    while (true) {
        const action = yield take(STORE_FORECAST_SEARCH);
        yield* asyncStoreForecastSearch(action)
    }
}

export function* watchGetSearchHistoryEntry() {
    while (true) {
        const action = yield take(GET_SEARCH_HISTORY_ENTRY);
        yield* asyncGetSearchHistoryEntry(action)
    }
}

export default function* () {
    yield all([
        fork(watchGetForecastSearch),
        fork(watchStoreForecastSearch),
        fork(watchGetSearchHistoryEntry)
    ]);
}
