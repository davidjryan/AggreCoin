import {
  MAIN_COIN_CHANGE,
  SECOND_COIN_CHANGE
} from '../../Utils/ActionTypes';

export const SelectMain = (coin) => {
  return {
    type: MAIN_COIN_CHANGE,
    payload: coin
  };
};

export const SelectSecond = (coin) => {
  return {
    type: SECOND_COIN_CHANGE,
    payload: coin
  };
};