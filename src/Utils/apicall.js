/* eslint-disable max-len */
import { bittrexSuccess, bittrexFail } from '../Actions/BittrexDataFetch/BittrexDataFetch';
import { poloniexSuccess, poloniexFail } from '../Actions/PoloniexDataFetch/PoloniexDataFetch';

export const bitFetch = (main, second) => {
  return dispatch => {

    return fetch(`https://bittrex.com/api/v1.1/public/getorderbook?market=${main}-${second}&type=both`)
      .then(res => res.json())
      .then(res => {
        return dispatch(bittrexSuccess(res.result));
      })
      .catch(error => {
        return dispatch(bittrexFail(error));
      });
  };
};

export const polFetch = (main, second) => {
  return dispatch => {

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