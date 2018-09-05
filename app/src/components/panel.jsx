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
      defaultCurrency1: { id: 1, value: "PLN", rate: 0 },
      defaultCurrency2: { id: 2, value: "EUR", rate: 0 },
      rate: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  getDataFromApi(first, second) {
    let getData = (one, two) => {
      if (one === "PLN" || one === "") {
        if (two === first) {
          this.val1 = 1;
          this.updateData(this.val1, this.val2);
          this.setState({
            defaultCurrency1: [{ id: 1, value: one, rate: this.val1 }]
          });
        } else {
          this.val1 = 1;
          this.updateData(this.val1, this.val2);
          this.setState({
            defaultCurrency1: [{ id: 1, value: one, rate: this.val1 }]
          });
          //console.log(this.state.defaultCurrency1);
        }
      } else {
        if (two === first) {
          this.setState({ rate: 1 });
        } else {
          fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${one}/`)
            .then(response => response.json())
            .then(findresponse => {
              //console.log(findresponse.rates[0].mid);
              this.val1 = findresponse.rates[0].mid;

              this.val1 = this.val1.toFixed(2);
              //console.log(this.state.defaultCurrency1);
              this.setState({
                defaultCurrency1: [{ id: 1, value: one, rate: this.val1 }]
              });
              //console.log(val);
              //this.setState({ rate: val });
              this.updateData(this.val1, this.val2);
            });
        }
      }
      if (two === "PLN" || two === "") {
        if (two === first) {
          this.val2 = 1;
          this.updateData(this.val1, this.val2);
          this.setState({
            defaultCurrency1: [{ id: 2, value: one, rate: this.val2 }]
          });
        } else {
          this.val2 = 1;
          this.updateData(this.val1, this.val2);
          this.setState({
            defaultCurrency1: [{ id: 2, value: one, rate: this.val2 }]
          });
          //console.log(this.state.defaultCurrency1);
        }
      } else {
        if (two === first) {
          this.setState({ rate: 1 });
        } else {
          fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${two}/`)
            .then(response => response.json())
            .then(findresponse => {
              //console.log(findresponse.rates[0].mid);
              this.val2 = findresponse.rates[0].mid;
              //console.log(this.state.defaultCurrency2);
              this.val2 = this.val2.toFixed(2);
              this.setState({
                defaultCurrency2: [{ id: 2, value: two, rate: this.val2 }]
              });
              //this.setState({ rate: val });
              this.updateData(this.val1, this.val2);
            });
        }
      }
    };

    //console.log(first, second);

    getData(first, second);
  }
  updateData(first, second) {
    if (first) {
      if (second) {
        if (first > second) {
          //console.log(first, second);
          let res = first / second;
          //console.log(res);
          res = res.toFixed(2);
          this.setState({ rate: res });
        } else {
          //console.log(first, second);
          let res = first / second;
          res = res.toFixed(2);
          this.setState({ rate: res });
          //console.log(res);
        }
      } else {
        //console.log(first, second);
        this.setState({ rate: first });
      }
    } else if (second) {
      //console.log(first, second);
      this.setState({ rate: second });
    }
  }
  componentDidMount() {
    //console.log(
    //   this.state.defaultCurrency1.value,
    //   this.state.defaultCurrency2.value
    // );
    this.getDataFromApi(
      this.state.defaultCurrency1.value,
      this.state.defaultCurrency2.value
    );
    // this.setState({
    //   defaultCurrency: [{ id: 1, value: "PLN" }, { id: 2, value: "GBP" }]
    // });
  }
  handleSelect(e) {
    //console.log(e + "-------updated values");
    this.setState({
      defaultCurrency1: { id: 1, value: e[0], rate: this.val1 },
      defaultCurrency2: { id: 2, value: e[1], rate: this.val2 }
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
          defaultCurrencys={[
            this.state.defaultCurrency1,
            this.state.defaultCurrency2
          ]}
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
