import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const GET_FORECAST_SEARCH = 'forecast/GET_FORECAST_SEARCH';
export const GET_FORECAST_SEARCH_SUCCESS = 'forecast/GET_FORECAST_SEARCH_SUCCESS';
export const STORE_FORECAST_SEARCH = 'forecast/STORE_FORECAST_SEARCH';
export const STORE_FORECAST_SEARCH_SUCCESS = 'forecast/STORE_FORECAST_SEARCH_SUCCESS';
export const GET_SEARCH_HISTORY_ENTRY = 'forecast/GET_SEARCH_HISTORY_ENTRY';
export const GET_SEARCH_HISTORY_ENTRY_SUCCESS = 'forecast/GET_SEARCH_HISTORY_ENTRY_SUCCESS';


/**
 * Action Creators
 */
export const forecastSearchActionCreators = {
  getForecastSearch: createPromiseAction(GET_FORECAST_SEARCH),
  getForecastSearchSuccess: createAction(GET_FORECAST_SEARCH_SUCCESS),
  storeForecastSearch: createPromiseAction(STORE_FORECAST_SEARCH),
  storeForecastSearchSuccess: createAction(STORE_FORECAST_SEARCH_SUCCESS),
  getSearchHistoryEntry: createPromiseAction(GET_SEARCH_HISTORY_ENTRY),
  getSearchHistoryEntrySuccess: createAction(GET_SEARCH_HISTORY_ENTRY_SUCCESS)
}