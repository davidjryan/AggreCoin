import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VictoryStack,
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
  VictoryAxis,
  VictoryLabel
} from 'victory';
import PropTypes from 'prop-types';

import './GraphContainer.css';

import { BittrexDataFetch } from '../../Actions/BittrexDataFetch/BittrexDataFetch';
import { PoloniexDataFetch } from '../../Actions/PoloniexDataFetch/PoloniexDataFetch';

export class GraphContainer extends Component {

  componentDidMount() {
    const { mainCoin, secondCoin } = this.props.coins;
    this.props.BittrexDataFetch(mainCoin, secondCoin);
    this.props.PoloniexDataFetch(mainCoin, secondCoin);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.coins === this.props.coins) {
      return;
    }

    const { mainCoin, secondCoin } = this.props.coins;
    this.props.BittrexDataFetch(mainCoin, secondCoin);
    this.props.PoloniexDataFetch(mainCoin, secondCoin);
  } 

  bittrexClean(data) {
    let sum = 0;
    const dataTruncated = data.splice(0, 50);
    const cleanData = dataTruncated.map((order) => {
      sum += order.Quantity;
      return {
        x: order.Rate,
        y: sum
      };
    });

    return cleanData;
  }

  poloniexClean(data) { 
    let sum = 0;   
    const cleanData = data.map((order) => {
      sum += order[1];
      return {
        x: parseFloat(order[0]),
        y: sum
      };
    });

    return cleanData;
  }

  combineData() {
    const { bittrex, poloniex } = this.props;
    return [[
      ...this.bittrexClean(bittrex.bittrexData.buy),
      ...this.poloniexClean(poloniex.poloniexData.bids)],
    [...this.bittrexClean(bittrex.bittrexData.sell), 
      ...this.poloniexClean(poloniex.poloniexData.asks)]];
  }


  render() {
    if (!this.props.bittrex.bittrexData || !this.props.poloniex.poloniexData) {
      return <div>Loading...</div>;
    }
    return (
      <VictoryChart
        className="chart"
        theme={VictoryTheme.material}
        height={230}
      >
        <VictoryLegend x={110} y={30}
          centerTitle
          orientation="horizontal"
          gutter={20}
        
          style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
          data={[
            { name: "Buy", symbol: { fill: "tomato" } },
            { name: "Sell", symbol: { fill: "yellow" } }
 
          ]}
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 5 } }} />
        
        <VictoryAxis dependentAxis 
          style={{ tickLabels: { fontSize: 5 } }} />
        
        <VictoryStack>
          {this.combineData().map((data, i) => {
            return (
              <VictoryArea
                key={i}
                data={data}
                interpolation={"step"}
                scale={{ x: "linear", y: "log" }}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    );
  }
}

export const mapStateToProps = (store) => {
  const { bittrex, poloniex, coins } = store;
  return {
    bittrex,
    poloniex,
    coins
  };
};

export const mapDispatchToProps = (dispatch) => {

  return {
    BittrexDataFetch: (first, second) => dispatch(BittrexDataFetch(first, second)),
    PoloniexDataFetch: (first, second) => dispatch(PoloniexDataFetch(first, second))
  };
};

GraphContainer.proptypes = {
  bittrex: PropTypes.object.isRequired,
  poloniex: PropTypes.object.isRequired,
  coins: PropTypes.objectOf(PropTypes.string),
  BittrexDataFetch: PropTypes.func.isRequired,
  PoloniexDataFetch: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);