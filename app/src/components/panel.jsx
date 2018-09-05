import React, { Component } from "react";
import Selects from "./selects";
import Rate from "./rate";
import Exchange from "./exchange";
import "./css/panel.css";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.val1 = 0;
    this.val2 = 0;
    this.state = {
      currency: [
        { id: 1, name: "PLN" },
        { id: 2, name: "EUR" },
        { id: 3, name: "GBP" },
        { id: 4, name: "AUD" },
        { id: 5, name: "BGN" },
        { id: 6, name: "CAD" },
        { id: 7, name: "CNY" },
        { id: 8, name: "NOK" },
        { id: 9, name: "SEK" },
        { id: 10, name: "USD" }
      ],
      Currency1: { id: 1, value: "EUR", rate: 0 }, // here you can set default value of first currency
      Currency2: { id: 2, value: "PLN", rate: 0 }, // here you can set default value of second currency
      rate: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentDidMount() {
    this.getDataFromApi(this.state.Currency1.value, this.state.Currency2.value);
  }
  getDataFromApi(firstCurrency, secondCurrency) {
    let getData = (firstCurrency, secondCurrency) => {
      if (firstCurrency === "PLN" || firstCurrency === "") {
        if (secondCurrency === firstCurrency) {
          this.val1 = 1;
          this.updateRate(this.val1, this.val2);
          this.setState({
            Currency1: [{ id: 1, value: firstCurrency, rate: this.val1 }]
          });
        } else {
          this.val1 = 1;
          this.updateRate(this.val1, this.val2);
          this.setState({
            Currency1: [{ id: 1, value: firstCurrency, rate: this.val1 }]
          });
        }
      } else {
        if (secondCurrency === firstCurrency) {
          this.setState({ rate: 1 });
        } else {
          fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${firstCurrency}/`)
            .then(response => response.json())
            .then(findresponse => {
              this.val1 = findresponse.rates[0].mid;

              this.val1 = this.val1.toFixed(2);
              this.setState({
                Currency1: [{ id: 1, value: firstCurrency, rate: this.val1 }]
              });
              this.updateRate(this.val1, this.val2);
            });
        }
      }
      if (secondCurrency === "PLN" || secondCurrency === "") {
        if (secondCurrency === firstCurrency) {
          this.val2 = 1;
          this.updateRate(this.val1, this.val2);
          this.setState({
            Currency2: [{ id: 2, value: firstCurrency, rate: this.val2 }]
          });
        } else {
          this.val2 = 1;
          this.updateRate(this.val1, this.val2);
          this.setState({
            Currency2: [{ id: 2, value: firstCurrency, rate: this.val2 }]
          });
        }
      } else {
        if (secondCurrency === firstCurrency) {
          this.setState({ rate: 1 });
        } else {
          fetch(
            `http://api.nbp.pl/api/exchangerates/rates/A/${secondCurrency}/`
          )
            .then(response => response.json())
            .then(findresponse => {
              this.val2 = findresponse.rates[0].mid;
              this.val2 = this.val2.toFixed(2);
              this.setState({
                Currency2: [{ id: 2, value: secondCurrency, rate: this.val2 }]
              });
              this.updateRate(this.val1, this.val2);
            });
        }
      }
    }; // function which get data from NBP api

    getData(firstCurrency, secondCurrency);
  }
  updateRate(firstCurValue, secondCurValue) {
    if (firstCurValue) {
      if (secondCurValue) {
        let res = firstCurValue / secondCurValue;
        res = res.toFixed(2);
        this.setState({ rate: res });
      } else {
        this.setState({ rate: firstCurValue });
      }
    } else if (secondCurValue) {
      this.setState({ rate: secondCurValue });
    }
  }
  handleSelect(e) {
    this.setState({
      Currency1: { id: 1, value: e[0], rate: this.val1 },
      Currency2: { id: 2, value: e[1], rate: this.val2 }
    });
    this.getDataFromApi(e[0], e[1]);
  }
  handleOnClick(fVal, sVal) {
    console.log(fVal, sVal);
  }
  render() {
    return (
      <div className="Panel inner">
        <div>
          <h2>I'd like to change</h2>
        </div>
        <Selects
          defaultCurrencys={[this.state.Currency1, this.state.Currency2]}
          currencys={this.state.currency}
          onSelect={this.handleSelect}
        />
        <Rate rate={this.state.rate} />
        <Exchange rate={this.state.rate} click={this.handleOnClick} />
      </div>
    );
  }
}
export default Panel;
