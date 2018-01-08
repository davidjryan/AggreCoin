import { 
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL,
} from '../../Utils/ActionTypes';

export const BittrexDataFetch = () => {
  return dispatch => {

    dispatch(bittrexLoading())

    return fetch('https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-ETH&type=both')
      .then(res => res.json())
      .then(res => {
        return dispatch(bittrexSuccess(res.result))
      })
      .catch(err => {
        return dispatch(bittrexFail(err));
      });
  }
}

export const bittrexFail = (err) => {
  return {
    type: FETCHING_BITTREX_DATA_FAIL,
    payload: err,
  }  
};

export const bittrexSuccess = (result) => {
  return {
    type: FETCHING_BITTREX_DATA_SUCCESS,
    payload: result,
  }  
};

export const bittrexLoading = () => {
  return {
    type: FETCHING_BITTREX_DATA,
  }  
};