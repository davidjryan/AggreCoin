import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectMain, SelectSecond } from '../../Actions/CoinSelection/CoinSelection';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './InterfaceContainer.css';

export class InterfaceContainer extends Component {

  render() {
    const { mainCoin, secondCoin } = this.props.coins;

    const mainValue = mainCoin && mainCoin.value;
    const secondValue = secondCoin && secondCoin.value;
    return (
      <section>
        <section className="list-containers">
          <h3 className="section-heading">{this.props.coins.mainCoin}</h3>
          <Select 
            name="main-drop select"
            placeholder="Select a primary market"
            value={mainValue}
            onChange={(value)=>this.props.SelectMain(value[0].value)}
            options={[
              { value: "BTC", label: "BTC" }
            ]}
          />
        </section>
        <section className="list-containers">
          <h3 className="section-heading">{this.props.coins.secondCoin}</h3>
          <Select 
            name="second-drop select"
            placeholder="Select a secondary market"
            value={secondValue}
            onChange={(value)=>this.props.SelectSecond(value.value)}
            options={[
            
              {value:"ETH", label: "ETH"},
              {value:"XRP", label: "XRP"},
              {value: "DOGE", label: "DOGE"},
              {value: "LSK", label: "LSK"},
              {value: "LTC", label:"LTC"}]}
          />
        </section>
      </section>
    );
  }
}

export const mapStateToProps = (store) => {
  const { coins } = store;
  return {
    coins
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    SelectMain: (string) => dispatch(SelectMain(string)),
    SelectSecond: (string) => dispatch(SelectSecond(string))
  };
};

InterfaceContainer.proptypes = {
  coins: PropTypes.objectOf(PropTypes.string),
  SelectMain: PropTypes.func.isRequired,
  SelectSecond: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer);