import * as coinAction from './CoinSelection';

describe('coin selection actions', () => {

  it('should have a type MAIN_COIN_CHANGE', () => {
    const payload = "BTC";
    const expected = {
      type: "MAIN_COIN_CHANGE",
      payload
    };

    expect(coinAction.SelectMain(payload)).toEqual(expected);
  });

  it('should have a type SECOND_COIN_CHANGE', () => {
    const payload = "BTC";
    const expected = {
      type: "SECOND_COIN_CHANGE",
      payload
    };

    expect(coinAction.SelectSecond(payload)).toEqual(expected);
  });
});