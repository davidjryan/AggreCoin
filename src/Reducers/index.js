import { combineReducers } from 'redux';
import BittrexFetchReducer from './BittrexFetchReducer/BittrexFetchReducer';
import PoloniexFetchReducer from './PoloniexFetchReducer/PoloniexFetchReducer';
import CoinSelectReducer from './CoinSelectReducer/CoinSelectReducer';

export default combineReducers({
  coins: CoinSelectReducer,
  bittrex: BittrexFetchReducer,
  poloniex: PoloniexFetchReducer
});