import React, { Component } from "react";
import Inputs from "./inputs";
import "./css/exchange.css";
//stateless functional component
class Exchange extends Component {
  state = {};
  render() {
    return (
      <div className="Exchange">
        <Inputs rate={this.props.rate} />
      </div>
    );
  }
}
export default Exchange;
