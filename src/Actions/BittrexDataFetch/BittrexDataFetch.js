import { bitFetch } from '../../Utils/apicall';
import { 
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const BittrexDataFetch = (main, second) => {
  
  return dispatch => {

    dispatch(bittrexLoading());

    return bitFetch(main, second);
  };
};

export const bittrexFail = (error) => {
  return {
    type: FETCHING_BITTREX_DATA_FAIL,
    payload: error
  };
};

export const bittrexSuccess = (result) => {
  return {
    type: FETCHING_BITTREX_DATA_SUCCESS,
    payload: result
  }  ;
};

export const bittrexLoading = () => {
  return {
    type: FETCHING_BITTREX_DATA
  };
};