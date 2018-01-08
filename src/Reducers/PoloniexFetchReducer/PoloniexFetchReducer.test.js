import PoloniexFetchReducer from './PoloniexFetchReducer';


describe('poloniex reducer', () => {
  const mockPoloniexData = [["0.06776560", 44.457], ["0.06776561", 16.67325956]];
  const mockError = { error: "TYPE_ERROR" };

  it('should have a default state', () => {
    expect(PoloniexFetchReducer(undefined, {})).toEqual({
      isLoading: false,
      poloniexData: null,
      hasErrored: false,
      errorMessage: null
    });
  });

  it('should give an array of data when passed info', () => {
    const action = { type: "FETCHING_POLONIEX_DATA_SUCCESS", payload: mockPoloniexData };

    expect(PoloniexFetchReducer({}, action).poloniexData.length).toEqual(mockPoloniexData.length);
  });

  it('should return true if FETCHING_POLONIEX_DATA', () => {
    const action = { type: "FETCHING_POLONIEX_DATA" };

    expect(PoloniexFetchReducer({}, action)).toEqual({
      isLoading: true,
      poloniexData: null,
      hasErrored: false,
      errorMessage: null
    });
  });

  it('should return true if FETCHING_POLONIEX_DATA_FAIL', () => {
    const action = { type: "FETCHING_POLONIEX_DATA_FAIL", payload: mockError };

    expect(PoloniexFetchReducer({}, action)).toEqual({
      isLoading: false,
      poloniexData: [],
      hasErrored: true,
      errorMessage: mockError
    });
  });
});