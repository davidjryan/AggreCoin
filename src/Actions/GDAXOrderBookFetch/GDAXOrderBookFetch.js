import {
  FETCHING_GDAX_ORDERBOOK,
  FETCHING_GDAX_ORDERBOOK_SUCCESS,
  FETCHING_GDAX_ORDERBOOK_FAIL
} from "../../Utils/ActionTypes";

export const GDAXOrderBookFetch = (main, second) => async dispatch => {
  dispatch(gdaxLoading());
  try {
    const res = await fetch(
      `https://api.gdax.com/products/${main}-${second}/book?level=2`
    );
    const endpoint = await res.json();
    dispatch(gdaxSuccess(endpoint));
  } catch (error) {
    dispatch(gdaxFail(error));
  }
};

export const gdaxFail = error => {
  return {
    type: FETCHING_GDAX_ORDERBOOK_FAIL,
    payload: error
  };
};

export const gdaxSuccess = result => {
  return {
    type: FETCHING_GDAX_ORDERBOOK_SUCCESS,
    payload: result
  };
};

export const gdaxLoading = () => {
  return {
    type: FETCHING_GDAX_ORDERBOOK
  };
};
