import {
    GET_FORECAST_SEARCH,
    GET_FORECAST_SEARCH_SUCCESS,
    STORE_FORECAST_SEARCH,
    STORE_FORECAST_SEARCH_SUCCESS,
    GET_SEARCH_HISTORY_ENTRY,
    GET_SEARCH_HISTORY_ENTRY_SUCCESS
} from './actions';

import { defaultReducers } from './../defaultReducers';

const DEFAULT = defaultReducers.forecastSearch;

export default function forecastSearch(state = DEFAULT, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case GET_FORECAST_SEARCH:
            return {
                ...state
            }
        case GET_FORECAST_SEARCH_SUCCESS:
            console.log('REDUCER: SEARCH_FORECAST_SUCCESS: ');
            state.currentForecast = payload.forecast;
            return {
                ...state
            }    
        case STORE_FORECAST_SEARCH:
            return {
                ...state
            }
        case STORE_FORECAST_SEARCH_SUCCESS:
            state.history = Array(1).fill(payload.forecast).concat(state.history);
            return {
                ...state
            }
        case GET_SEARCH_HISTORY_ENTRY:
            return {
                ...state
            }
        case GET_SEARCH_HISTORY_ENTRY_SUCCESS:
            console.log('REDUCER: GET_SEARCH_HISTORY_ENTRY_SUCCESS');
            const historyEntryList = state.history.filter(forecast => forecast.id === payload.forecastId);
            if(historyEntryList.length > 0){
                state.searchHistoryEntry = historyEntryList[0];
            } else {
                state.searchHistoryEntry = {};
            }
            return {
                ...state
            }
        default:
            return state;
    }
}