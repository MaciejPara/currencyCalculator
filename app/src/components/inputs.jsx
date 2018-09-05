import React, { Component } from "react";
import Input from "./input";
import "./css/inputs.css";
class Inputs extends Component {
  render() {
    const { rate, click } = this.props;
    return (
      <div className="Inputs">
        <Input rate={rate} click={click} />
      </div>
    );
  }
}
export default Inputs;
