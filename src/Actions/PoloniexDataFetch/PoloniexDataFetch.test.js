import * as polAction from './PoloniexDataFetch';

describe('poloniex data fetch action', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        [["0.06776560", 44.457], ["0.06776561", 16.67325956]]
      )
    }));
  });

  it('should fetch bittrexdata', async () => {
    const bittrexData = await polAction.PoloniexDataFetch();
    expect(bittrexData).toEqual([["0.06776560", 44.457], ["0.06776561", 16.67325956]])
  })

  it('should have a type POLONIEX_DATA_FAIL', () => {
    const payload = "yayerror"
    const expected = {
      type: "FETCHING_POLONIEX_DATA_FAIL",
      payload
    }

    expect(polAction.poloniexFail(payload)).toEqual(expected)
  })

  it('should have a type POLONIEX_DATA_LOADING', () => {
    const payload = ['array']
    const expected = {
      type: "FETCHING_POLONIEX_DATA_SUCCESS",
      payload
    }

    expect(polAction.poloniexSuccess(payload)).toEqual(expected)
  })

  it('should have a type POLONIEX_DATA_FAIL', () => {
    const expected = {
      type: "FETCHING_POLONIEX_DATA"
    }

    expect(polAction.poloniexLoading()).toEqual(expected)
  })
})