import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VictoryStack,
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryLegend
} from 'victory';

import { BittrexDataFetch } from '../Actions/BittrexDataFetch/BittrexDataFetch';
import { PoloniexDataFetch } from '../Actions/PoloniexDataFetch/PoloniexDataFetch';

class GraphContainer extends Component {

  componentWillMount() {
    const { mainCoin, secondCoin } = this.props.coins;
    this.props.BittrexDataFetch(mainCoin, secondCoin);
    this.props.PoloniexDataFetch(mainCoin, secondCoin);
  }

  bittrexBuy() {
    const { buy } = this.props.bittrex.bittrexData;
    const buyTruncated = buy.splice(0, 50);
    const buyData = buyTruncated.map((order) => {
      return {
        x: order.Rate,
        y: order.Quantity
      };
    });

    return buyData;
  }

  bittrexSell() {
    const { sell } = this.props.bittrex.bittrexData;
    const sellTruncated = sell.splice(0, 50);
    const sellData = sellTruncated.map((order) => {
      return {
        x: order.Rate,
        y: order.Quantity
      };
    });

    return sellData;
  }

  poloniexBuy() {
    const { bids } = this.props.poloniex.poloniexData;
    
    const buyData = bids.map((order) => {
      return {
        x: parseFloat(order[0]),
        y: order[1]
      };
    });

    return buyData;
  }

  poloniexSell() {
    const { asks } = this.props.poloniex.poloniexData;
    const sellData = asks.map((order) => {
      return {
        x: parseFloat(order[0]),
        y: order[1]
      };
    });

    return sellData;
  }


  combineData() {
    return [[
      ...this.bittrexBuy(),
      ...this.poloniexBuy()],
    [...this.bittrexSell(), 
      ...this.poloniexSell()]];
  }


  render() {
    if (!this.props.bittrex.bittrexData || !this.props.poloniex.poloniexData) {
      return <div>Loading...</div>;
    }
    return (
      <VictoryChart
        className="chart"
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
        domain={{ y: [0, 300] }}
        height={200}
        width={200}
      >
        <VictoryLegend
          data={[
            { name: "Buy", symbol: { fill: "tomato" } },
            { name: "Sell", symbol: { fill: "orange" } }
 
          ]}
        />
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

const mapStateToProps = (store) => {
  const { bittrex, poloniex, coins } = store;
  return {
    bittrex,
    poloniex,
    coins
  };
};

export default connect(mapStateToProps, { BittrexDataFetch, PoloniexDataFetch })(GraphContainer);