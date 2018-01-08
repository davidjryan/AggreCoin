import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../../Utils/ActionTypes';

export default function PoloniexDataFetch() {
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

const poloniexFail = (err) => {
  return {
    type: FETCHING_POLONIEX_DATA_FAIL,
    payload: err,
  }
};

const poloniexSuccess = (result) => {
  return {
    type: FETCHING_POLONIEX_DATA_SUCCESS,
    payload: result,
  }
};

const poloniexLoading = () => {
  return {
    type: FETCHING_POLONIEX_DATA,
  }
};