import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  VictoryStack,
  VictoryArea,
  VictoryChart,
  VictoryTheme,
} from 'victory';

import BittrexDataFetch from '../Actions/BittrexDataFetch';
import PoloniexDataFetch from '../Actions/PoloniexDataFetch';

class GraphContainer extends Component {
  // combineData() {
  //   const aggregateData = []
  //   return _.range(5).map(() => {
  //     return [
  //       { x: 1, y: _.random(1, 5) },
  //       { x: 2, y: _.random(1, 10) },
  //       { x: 3, y: _.random(2, 10) },
  //       { x: 4, y: _.random(2, 10) },
  //       { x: 5, y: _.random(2, 15) }
  //     ];
  //   });
  // }

  
  componentDidMount() {
    this.props.BittrexDataFetch();
    this.props.PoloniexDataFetch();
  }

  cleanPoloniex() {
    return 
  }

  render() {
    return (
      // <VictoryChart
      //   theme={VictoryTheme.material}
      //   animate={{ duration: 1000 }}
      // >
      //   <VictoryStack
      //     colorScale={"blue"}
      //   >
      //     {this.state.data.map((data, i) => {
      //       return (
      //         <VictoryArea
      //           key={i}
      //           data={data}
      //           interpolation={"basis"}
      //         />
      //       );
      //     })}
      //   </VictoryStack>
      // </VictoryChart>
      <div></div>
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