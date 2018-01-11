import * as bitAction from './BittrexDataFetch';

describe('bittrex data fetch action', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        [["0.06776560", 44.457], ["0.06776561", 16.67325956]]
      )
    }));
  });

  it.skip('should fetch bittrexdata', async () => {
    const bittrexData = await bitAction.BittrexDataFetch();
    expect(bittrexData).toEqual([["0.06776560", 44.457], ["0.06776561", 16.67325956]]);
  });

  it('should have a type BITTREX_DATA_FAIL', () => {
    const payload = "yayerror";
    const expected = {
      type: "FETCHING_BITTREX_DATA_FAIL",
      payload
    };

    expect(bitAction.bittrexFail(payload)).toEqual(expected);
  });

  it('should have a type BITTREX_DATA_LOADING', () => {
    const payload = ['array'];
    const expected = {
      type: "FETCHING_BITTREX_DATA_SUCCESS",
      payload
    };

    expect(bitAction.bittrexSuccess(payload)).toEqual(expected);
  });

  it('should have a type BITTREX_DATA_FAIL', () => {
    const expected = {
      type: "FETCHING_BITTREX_DATA"
    };

    expect(bitAction.bittrexLoading()).toEqual(expected);
  });

});