import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../Utils/ActionTypes';

export default function PoloniexDataFetch() {
  return dispatch => {

    dispatch({ type: FETCHING_POLONIEX_DATA })

    return fetch('https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return dispatch({ type: FETCHING_POLONIEX_DATA_SUCCESS, payload: res })
      })
      .catch(err => {
        return dispatch({ type: FETCHING_POLONIEX_DATA_FAIL, payload: err });
      });
  }
}