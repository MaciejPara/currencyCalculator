import React, { Component } from "react";
import Inputs from "./inputs";
import "./css/exchange.css";

class Exchange extends Component {
  render() {
    const { rate, click } = this.props;
    return (
      <div className="Exchange">
        <Inputs rate={rate} click={click} />
      </div>
    );
  }
}
export default Exchange;
