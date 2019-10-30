import {
    GET_CITIES,
    GET_CITIES_SUCCESS
} from './actions';

import { defaultReducers } from './../defaultReducers';

const DEFAULT = defaultReducers.cities;

export default function cities(state = DEFAULT, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case GET_CITIES:
            return {
                ...state
            }
        case GET_CITIES_SUCCESS:
            console.log('REDUCER: GET_CITIES_SUCCESS: ');
            return {
                ...state
            }        
        default:
            return state;
    }
}