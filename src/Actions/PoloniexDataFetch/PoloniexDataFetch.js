/* eslint-disable max-len */

import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const PoloniexDataFetch = (main, second) => {

  return dispatch => {

    dispatch(poloniexLoading());

    return fetch(`https://poloniex.com/public?command=returnOrderBook&currencyPair=${main}_${second}`)
      .then(res => res.json())
      .then(res => {
        return dispatch(poloniexSuccess(res));
      })
      .catch(error => {
        return dispatch(poloniexFail(error));
      });
  };
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