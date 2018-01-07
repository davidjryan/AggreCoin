import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VictoryStack,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory';

import BittrexDataFetch from '../Actions/BittrexDataFetch/BittrexDataFetch';
import PoloniexDataFetch from '../Actions/PoloniexDataFetch/PoloniexDataFetch';

class GraphContainer extends Component {

  componentWillMount() {
    this.props.BittrexDataFetch();
    this.props.PoloniexDataFetch();
  }

  bittrexBuy() {
    const { buy } = this.props.bittrex.bittrexData;
    const buyTruncated = buy.splice(0, 50)
    const buyData = buyTruncated.map((order) => {
      return {
        x: order.Rate,
        y: order.Quantity,
      };
    });

    return buyData
  }

  bittrexSell() {
    const { sell } = this.props.bittrex.bittrexData;
    const sellTruncated = sell.splice(0, 50)
    const sellData = sellTruncated.map((order) => {
      return {
        x: order.Rate,
        y: order.Quantity,
      };
    });

    return sellData;
  }

  poloniexBuy() {
    const { bids } = this.props.poloniex.poloniexData;
    
    const buyData = bids.map((order) => {
      return {
        x: parseFloat(order[0]),
        y: order[1],
      };
    });

    return buyData;
  }

  poloniexSell() {
    const { asks } = this.props.poloniex.poloniexData;
    const sellData = asks.map((order) => {
      return {
        x: parseFloat(order[0]),
        y: order[1],
      };
    });

    return sellData;
  }


  combineData(bittrexBuy, poloniexBuy, bittrexSell, poloniexSell) {
    return [ [...bittrexBuy, ...poloniexBuy], [...bittrexSell, ...poloniexSell] ]
  }


  render() {
    if (!this.props.bittrex.bittrexData && !this.props.poloniex.poloniexData) {
      return <div>Loading...</div>
    }
    console.log(this.props.bittrex.bittrexData)
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
        domain={{ y: [0, 300] }}
        height={250}
        width={250}
        >
          {this.combineData(this.bittrexBuy(), this.poloniexBuy(), this.bittrexSell(), this.poloniexSell()).map((data, i) => {
            console.log(data)
            return (
              <VictoryLine
                key={i}
                data={data}
                interpolation={"step"}
                scale={{ x: "linear", y: "log" }}
              />
            );
          })}
      </VictoryChart>
    );
  }
}

const mapStateToProps = (store) => {
  const { bittrex, poloniex } = store;

  return {
    bittrex,
    poloniex,
  };
};

export default connect(mapStateToProps, { BittrexDataFetch, PoloniexDataFetch })(GraphContainer);