import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VictoryStack,
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
  VictoryAxis
} from 'victory';
import PropTypes from 'prop-types';

import './GraphContainer.css';

import { BittrexDataFetch } from '../../Actions/BittrexDataFetch/BittrexDataFetch';
import { PoloniexDataFetch } from '../../Actions/PoloniexDataFetch/PoloniexDataFetch';
import { GDAXOrderBookFetch } from '../../Actions/GDAXOrderBookFetch/GDAXOrderBookFetch';

export class GraphContainer extends Component {

  componentDidMount() {
    const { mainCoin, secondCoin } = this.props.coins;
    this.props.BittrexDataFetch(mainCoin, secondCoin);
    this.props.PoloniexDataFetch(mainCoin, secondCoin);
    this.props.GDAXOrderBookFetch(mainCoin, secondCoin);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.coins === this.props.coins) {
      return;
    }

    const { mainCoin, secondCoin } = this.props.coins;
    this.props.BittrexDataFetch(mainCoin, secondCoin);
    this.props.PoloniexDataFetch(mainCoin, secondCoin);
    this.props.GDAXOrderBookFetch(mainCoin, secondCoin);
  } 

  bittrexClean(data) {
    console.log("bittrex raw", data);
    let sum = 0;
    const dataTruncated = data.splice(0, 50);
    const cleanData = dataTruncated.map((order) => {
      sum += order.Quantity;
      return {
        x: order.Rate,
        y: sum
      };
    });
    console.log("bittrex", cleanData);
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
    console.log("poloniex", cleanData)
    return cleanData;
  }

  combineBuy() {
    const { bittrex, poloniex } = this.props;
    return [this.bittrexClean(bittrex.bittrexData.buy), this.poloniexClean(poloniex.poloniexData.bids)];
  }

  combineSell() {
    const { bittrex, poloniex } = this.props;
    return [this.bittrexClean(bittrex.bittrexData.sell), this.poloniexClean(poloniex.poloniexData.asks)];
  }




  render() {
    if (!this.props.bittrex.bittrexData || !this.props.poloniex.poloniexData) {
      return <div>Loading...</div>;
    }
    return <VictoryChart className="chart" theme={VictoryTheme.material} height={230}>
        <VictoryLegend 
          x={50} 
          y={30} 
          centerTitle orientation="horizontal" 
          gutter={20} 
          style={{ border: { stroke: "black" }, title: { fontSize: 5 } }} 
          data={legendData} 
        />
        
        <VictoryAxis style={{ tickLabels: { fontSize: 5 } }} />

        <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />

        <VictoryStack colorScale={"red"}>
          {this.combineSell().map((data, i) => {
            return <VictoryArea key={i} data={data} interpolation={"basis"} scale={{ x: "linear", y: "log" }} />;
          })}
        </VictoryStack>

        <VictoryStack colorScale={"green"}>
          {this.combineBuy().map((data, i) => {
            return <VictoryArea key={i} data={data} interpolation={"basis"} scale={{ x: "linear", y: "log" }} />;
          })}
        </VictoryStack>
      </VictoryChart>;
  }
}

const legendData = [
  { name: "Bittrex Buy", symbol: { fill: "#364624" }, labels: { fontSize: 5 } },
  { name: "Bittrex Sell", symbol: { fill: "coral" }, labels: { fontSize: 5 } },
  {
    name: "Poloniex Buy",
    symbol: { fill: "#476534" },
    labels: { fontSize: 5 }
  },
  {
    name: "Poloniex Sell",
    symbol: { fill: "lightsalmon" },
    labels: { fontSize: 5 }
  }
];

export const mapStateToProps = (store) => {
  const { bittrex, poloniex, coins, gdax } = store;
  return {
    gdax,
    bittrex,
    poloniex,
    coins
  };
};

export const mapDispatchToProps = (dispatch) => {

  return {
    BittrexDataFetch: (first, second) => dispatch(BittrexDataFetch(first, second)),
    PoloniexDataFetch: (first, second) => dispatch(PoloniexDataFetch(first, second)),
    GDAXOrderBookFetch: (first, second) => dispatch(GDAXOrderBookFetch(first, second))
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