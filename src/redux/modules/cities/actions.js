import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const GET_CITIES = 'city/GET_CITIES';
export const GET_CITIES_SUCCESS = 'city/GET_CITIES_SUCCESS';

/**
 * Action Creators
 */
export const citiesActionCreators = {
  getCities: createPromiseAction(GET_CITIES),
  getCitiesSuccess: createAction(GET_CITIES_SUCCESS)
}