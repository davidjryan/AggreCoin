import { combineReducers } from 'redux';
import BittrexFetchReducer from './BittrexFetchReducer';

export default combineReducers({
  bittrex: BittrexFetchReducer
});