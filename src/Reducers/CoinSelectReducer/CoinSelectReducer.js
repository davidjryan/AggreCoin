import {
  MAIN_COIN_CHANGE,
  SECOND_COIN_CHANGE,
} from '../../Utils/ActionTypes';

const initialState = {
  mainCoin: 'BTC',
  secondCoin: 'ETH'
};

const CoinSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_COIN_CHANGE:
      return {
        ...state,
        mainCoin: action.payload,
      };
    case SECOND_COIN_CHANGE:
      return {
        ...state,
        secondCoin: action.payload,
      };
    default:
      return state;
  }
};

export default CoinSelectReducer;