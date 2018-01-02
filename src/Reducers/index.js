import { combineReducers } from 'redux';
import BittrexFetchReducer from './BittrexFetchReducer';
import PoloniexFetchReducer from './PoloniexFetchReducer';

export default combineReducers({
  bittrex: BittrexFetchReducer,
  poloniex: PoloniexFetchReducer
});