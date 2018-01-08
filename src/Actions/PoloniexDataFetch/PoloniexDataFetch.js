import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const PoloniexDataFetch = () => {
  return dispatch => {

    dispatch(poloniexLoading())

    return fetch('https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH')
      .then(res => res.json())
      .then(res => {
        return dispatch(poloniexSuccess(res))
      })
      .catch(err => {
        return dispatch(poloniexFail(err));
      });
  }
}

export const poloniexFail = (err) => {
  return {
    type: FETCHING_POLONIEX_DATA_FAIL,
    payload: err,
  }
};

export const poloniexSuccess = (result) => {
  return {
    type: FETCHING_POLONIEX_DATA_SUCCESS,
    payload: result,
  }
};

export const poloniexLoading = () => {
  return {
    type: FETCHING_POLONIEX_DATA,
  }
};