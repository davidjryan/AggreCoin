import { 
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL
} from '../../Utils/ActionTypes';

export const BittrexDataFetch = url => async dispatch => {
  dispatch(bittrexLoading());
  try {
    const res = await fetch(`${url}`);
    const endpoint = await res.json();
    dispatch(bittrexSuccess(endpoint));
  } catch (error) {
    dispatch(bittrexFail(error));
  }
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