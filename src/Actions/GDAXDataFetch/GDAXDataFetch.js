import {
  FETCHING_GDAX_DATA,
  FETCHING_GDAX_DATA_SUCCESS,
  FETCHING_GDAX_DATA_FAIL
} from "../../Utils/ActionTypes";

const initialState = {
  isLoading: false,
  gdaxData: null,
  hasErrored: false,
  errorMessage: null
};

const GDAXFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GDAX_DATA:
      return {
        ...state,
        isLoading: true,
        gdaxData: null,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_GDAX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gdaxData: action.payload,
        hasErrored: false,
        errorMessage: null
      };
    case FETCHING_GDAX_DATA_FAIL:
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

export default GDAXFetchReducer;
