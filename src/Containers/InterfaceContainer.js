import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectMain, SelectSecond } from '../Actions/CoinSelection/CoinSelection';
import Select from 'react-select';
import './InterfaceContainer.css';

class InterfaceContainer extends Component {

  render() {
    const { mainCoin, secondCoin } = this.props.coins;

    const mainValue = mainCoin && mainCoin.value;
    const secondValue = secondCoin && secondCoin.value;

    return (
      <section>
        <Select 
          name="main-drop"
          value={mainValue}
          onChange={(value)=>this.props.SelectMain(value)}
          options={[
            { value: "BTC", label: "BTC" },
            { value: "ETH", label: "ETH" }
          ]}
        />
        <Select 
          name="second-drop"
          value={secondValue}
          onChange={(value)=>this.props.SelectSecond(value)}
          options={[
            {value: "BTC", label: "BTC"},
            {value:"ETH", label: "ETH"},
            {value:"XRP", label: "XRP"},
            {value: "DOGE", label: "DOGE"},
            {value: "STR", label: "STR"},
            {value: "LSK", label: "LSK"},
            {value: "LTC", label:"LTC"}]}
        />
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  const { coins } = store;
  return {
    coins
  };
};

export default connect(mapStateToProps, { SelectMain, SelectSecond })(InterfaceContainer);