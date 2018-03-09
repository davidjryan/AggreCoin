/* eslint-disable max-len */
import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const PoloniexDataFetch = () => async dispatch => {
  dispatch(poloniexLoading());
  try {
    const res = await fetch(`${url}`);
    const endpoint = await res.json();
    dispatch(poloniexSuccess(endpoint));
  } catch (error) {
    dispatch(poloniexFail(error));
  }
};

export const poloniexFail = (error) => {
  return {
    type: FETCHING_POLONIEX_DATA_FAIL,
    payload: error
  };
};

export const poloniexSuccess = (result) => {
  return {
    type: FETCHING_POLONIEX_DATA_SUCCESS,
    payload: result
  };
};

export const poloniexLoading = () => {
  return {
    type: FETCHING_POLONIEX_DATA
  };
};