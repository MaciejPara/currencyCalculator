import React, { Component } from "react";
import Input from "./input";
import "./css/inputs.css";
//stateless functional component
class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        <Input rate={this.props.rate} />
      </div>
    );
  }
}
export default Inputs;
