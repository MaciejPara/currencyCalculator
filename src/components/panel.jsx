import React, { Component } from "react";
import Selects from "./selects";
import Rate from "./rate";
import Exchange from "./exchange";
import "./css/panel.css";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.pare = [];
    this.state = {
      currency: [
        { id: 1, name: "PLN" },
        { id: 2, name: "EUR" },
        { id: 3, name: "GBP" },
        { id: 4, name: "USD" }
      ],
      defaultCurrency: [{ id: 1, value: "PLN" }, { id: 2, value: "GBP" }],
      rate: 0
    };
  }
  getDataFromApi() {
    let getData = code => {
      if (code === "PLN") {
      } else {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${code}/`)
          .then(response => response.json())
          .then(findresponse => {
            console.log(findresponse.rates[0].mid);
            let val = findresponse.rates[0].mid;

            val = val.toFixed(2);
            this.pare.push(val);
            this.setState({ rate: val });
            this.updateData();
          });
      }
    };

    getData(this.state.defaultCurrency[0].value);
    getData(this.state.defaultCurrency[1].value);
  }
  updateData() {
    if (this.pare.length === 2) {
      if (this.pare[0] < this.pare[1]) {
        let res = this.pare[0] / this.pare[1];
        res = res.toFixed(2);
        this.setState({ rate: res });
      } else {
        let res = this.pare[1] / this.pare[0];
        res = res.toFixed(2);
        this.setState({ rate: res });
      }
    }
    console.log(this.pare);
  }
  componentDidMount() {
    this.getDataFromApi();
  }
  render() {
    return (
      <div className="Panel inner">
        <div>
          <h2>I'd like to change</h2>
        </div>
        <Selects
          defaultCurrencys={this.state.defaultCurrency}
          currencys={this.state.currency}
        />
        <Rate rate={this.state.rate} />
        <Exchange rate={this.state.rate} />
      </div>
    );
  }
}
export default Panel;
