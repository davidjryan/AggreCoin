import {
  FETCHING_GDAX_ORDERBOOK,
  FETCHING_GDAX_ORDERBOOK_SUCCESS,
  FETCHING_GDAX_ORDERBOOK_FAIL
} from "../../Utils/ActionTypes";

const initialState = {
  isLoading: false,
  gdaxData: null,
  hasErrored: false,
  errorMessage: null
};

const GDAXOrderBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GDAX_ORDERBOOK:
      return {
        ...state,
        isLoading: true,
        gdaxData: null,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_GDAX_ORDERBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gdaxData: action.payload,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_GDAX_ORDERBOOK_FAIL:
      return {
        ...state,
        isLoading: false,
        gdaxData: [],
        hasErrored: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default GDAXOrderBookReducer;
