import { 
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL
} from '../Utils/ActionTypes';

export default function BittrexDataFetch() {
  return dispatch => {

    dispatch({ type: FETCHING_BITTREX_DATA })

    return fetch('https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-ETH&type=both')
      .then(res => res.json())
      .then(res => {
        return dispatch({ type: FETCHING_BITTREX_DATA_SUCCESS, payload: res.result })
      })
      .catch(err => {
        return dispatch({ type: FETCHING_BITTREX_DATA_FAIL, payload: err });
      });

  }
}