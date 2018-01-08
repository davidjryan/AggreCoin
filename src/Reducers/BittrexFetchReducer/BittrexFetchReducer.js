import {
  FETCHING_BITTREX_DATA,
  FETCHING_BITTREX_DATA_SUCCESS,
  FETCHING_BITTREX_DATA_FAIL,
} from '../../Utils/ActionTypes';

const initialState = {
  isLoading: false,
  bittrexData: null,
  hasErrored: false,
  errorMessage: null,
};

const BittrexFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BITTREX_DATA:
      return {
        ...state,
        isLoading: true,
        bittrexData: null,
        hasErrored: false,
        errorMessage: null,
      };
    case FETCHING_BITTREX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bittrexData: action.payload,
        hasErrored: false,
        errorMessage: null,
      };
    case FETCHING_BITTREX_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        bittrexData: [],
        hasErrored: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default BittrexFetchReducer;
