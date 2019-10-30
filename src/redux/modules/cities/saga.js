import {
    put,
    fork,
    all,
    take,
} from 'redux-saga/effects';

import {
    citiesActionCreators,
    GET_CITIES,
    GET_CITIES_SUCCESS
} from './actions';


export function* asyncGetCities ({ payload, resolve, reject }) {
    const { recipeId } = payload;
    console.log('SAGA: GET_RECIPE', recipeId);
    try {
        // Here should be http call to the server
        const response = {
            result: 'ok'
        }
        if (response.result === 'ok') {
            yield put(citiesActionCreators.getCitiesSuccess({ }));
            resolve('Succesfully fetched cities');
        } else {
            reject("ERROR")
        }
    } catch (e) {
        console.log(e);
        reject(e);
    }
}

export function* watchGetCities() {
    while (true) {
        const action = yield take(GET_CITIES);
        yield* asyncGetCities(action)
    }
}

export default function* () {
    yield all([
        fork(watchGetCities)
    ]);
}
