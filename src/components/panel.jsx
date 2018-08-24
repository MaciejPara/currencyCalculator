import React, { Component } from "react";
import Selects from "./selects";
import Rate from "./rate";
import Exchange from "./exchange";
import "./css/panel.css";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [
        { id: 1, value: "PLN" },
        { id: 2, value: "EUR" },
        { id: 3, value: "GBP" }
      ]
    };
  }
  render() {
    return (
      <div className="Panel inner">
        <div>
          <h2>I'd like to change</h2>
        </div>
        <Selects currencys={this.state.currency} />
        <Rate />
        <Exchange />
      </div>
    );
  }
}
export default Panel;
