/* eslint-disable max-len */

import React from 'react';
import {
  InterfaceContainer,
  mapStateToProps,
  mapDispatchToProps
} from './InterfaceContainer';
import { shallow } from 'enzyme';

describe('InterfaceContainer tests', () => {
  let interfaceContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      coins: { mainCoin: "BTC", secondCoin: "ETH" },
      SelectMain: jest.fn(),
      SelectSecond: jest.fn()
    };
    interfaceContainer = shallow(
      <InterfaceContainer {...mockProps} />
    );
  });

  it('should match the snapshot', () => {
    expect(interfaceContainer).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(interfaceContainer).toBeDefined();
  });

  it('should mount with the correct elements', () => {
    const expectedSelectLength = 2;

    expect(interfaceContainer.find('select').length).toEqual(expectedSelectLength);
  });
});

describe('mapStateToProps tests', () => {

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
    result.SelectMain();

    expect(mockDispatch).toHaveBeenCalled();
  });
});