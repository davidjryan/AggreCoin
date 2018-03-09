/* eslint-disable max-len */

import { 
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const BittrexDataFetch = (main, second) => async dispatch => {
  dispatch(bittrexLoading());
  try {
    const res = await fetch(
      `https://bittrex.com/api/v1.1/public/getorderbook?market=${main}-${second}&type=both`
    );
    const endpoint = await res.json();
    dispatch(bittrexSuccess(endpoint.result));
  } catch (error) {
    dispatch(bittrexFail(error));
  }
};

export const bittrexFail = error => {
  return {
    type: FETCHING_BITTREX_DATA_FAIL,
    payload: error
  };
};

export const bittrexSuccess = result => {
  return {
    type: FETCHING_BITTREX_DATA_SUCCESS,
    payload: result
  };
};

export const bittrexLoading = () => {
  return {
    type: FETCHING_BITTREX_DATA
  };
};