import BittrexFetchReducer from './BittrexFetchReducer';


describe('bittrex reducer', () => {
  const mockBittrexData = [["0.06776560", 44.457], ["0.06776561", 16.67325956]];
  const mockError = { error: "TYPE_ERROR" }

  it('should have a default state', () => {
    expect(BittrexFetchReducer(undefined, {})).toEqual({
      isLoading: false,
      bittrexData: [],
      hasErrored: false,
      errorMessage: null,
    });
  });

  it('should give an array of data when passed info', () => {
    const action = { type: "FETCHING_BITTREX_DATA_SUCCESS", payload: mockBittrexData };

    expect(BittrexFetchReducer({}, action).bittrexData.length).toEqual(mockBittrexData.length);
  });

  it('should return true if FETCHING_BITTREX_DATA', () => {
    const action = { type: "FETCHING_BITTREX_DATA" };

    expect(BittrexFetchReducer({}, action)).toEqual({
      isLoading: true,
      bittrexData: null,
      hasErrored: false,
      errorMessage: null,
    });
  });

  it('should return true if FETCHING_BITTREX_DATA_FAIL', () => {
    const action = { type: "FETCHING_BITTREX_DATA_FAIL", payload: mockError };

    expect(BittrexFetchReducer({}, action)).toEqual({
      isLoading: false,
      bittrexData: [],
      hasErrored: true,
      errorMessage: mockError,
    });
  });
});