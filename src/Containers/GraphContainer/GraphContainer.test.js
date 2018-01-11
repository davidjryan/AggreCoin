/* eslint-disable max-len */

import React from 'react';
import {
  GraphContainer,
  mapStateToProps,
  mapDispatchToProps
} from './GraphContainer';
import { shallow } from 'enzyme';

describe('GraphContainer tests', () => {
  let graphContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      bittrex: {
        isLoading: true,
        bittrexData: null,
        hasErrored: false,
        errorMessage: null
      },
      poloniex: {
        isLoading: true,
        poloniexData: null,
        hasErrored: false,
        errorMessage: null},
      coins: {mainCoin: "BTC", secondCoin: "ETH"},
      PoloniexDataFetch: jest.fn(),
      BittrexDataFetch: jest.fn()
    };
    graphContainer = shallow(
      <GraphContainer {...mockProps} />
    );
  });

  it('should match the snapshot', () => {
    expect(graphContainer).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(graphContainer).toBeDefined();
  });

  it('should mount with the correct elements', () => {
    const expectedGraphLength = 1;

    expect(graphContainer.find('chart').length).toEqual(expectedGraphLength);
  });
});

describe('mapStateToProps tests', () => {

  it('should pull movies from the store', () => {
    const mockStore = {
      bittrex: {
        bittrexData: [0.987, 4.32]
      },
      poloniex: {
        poloniexData: [0.987, 4.32]
      }
    };

    const result = mapStateToProps(mockStore);
    expect(result.bittrex).toEqual(mockStore.bittrex);
    expect(result.poloniex).toEqual(mockStore.poloniex);
  });

  it('should pull proper error/loading status from the store', () => {
    const mockStore = {
      bittrex: {
        hasErrored: false,
        isLoading: false
      }
    };

    const result = mapStateToProps(mockStore);

    expect(result.hasErrored).toEqual(mockStore.hasErrored);
    expect(result.isLoading).toEqual(mockStore.isLoading);
  });

  it('should pull coins from store', () => {
    const mockStore = {
      coins: { mainCoin: "BTC", secondCoin: "ETH" }
    };

    const result = mapStateToProps(mockStore);

    expect(result.coins).toEqual(mockStore.coins);
  });
});

describe('map dispatch to props', () => {
  it('should map the BittrexDataFetch function to dispatch', () => {
    const mockDispatch = jest.fn();

    const result = mapDispatchToProps(mockDispatch);
    result.BittrexDataFetch();

    expect(mockDispatch).toHaveBeenCalled();
  });
});