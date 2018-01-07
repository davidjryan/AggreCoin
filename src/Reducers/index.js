import { combineReducers } from 'redux';
import BittrexFetchReducer from './BittrexFetchReducer/BittrexFetchReducer';
import PoloniexFetchReducer from './PoloniexFetchReducer/PoloniexFetchReducer';

export default combineReducers({
  bittrex: BittrexFetchReducer,
  poloniex: PoloniexFetchReducer,
});