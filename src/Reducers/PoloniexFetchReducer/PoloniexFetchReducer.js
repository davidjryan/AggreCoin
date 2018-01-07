import {
  FETCHING_POLONIEX_DATA,
  FETCHING_POLONIEX_DATA_SUCCESS,
  FETCHING_POLONIEX_DATA_FAIL
} from '../../Utils/ActionTypes';

const initialState = {
  isLoading: false,
  poloniexData: [],
  hasErrored: false,
  errorMessage: null
};

const PoloniexFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POLONIEX_DATA:
      return {
        ...state,
        isLoading: true,
        poloniexData: null,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_POLONIEX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        poloniexData: action.payload,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_POLONIEX_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        poloniexData: [],
        hasErrored: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default PoloniexFetchReducer;