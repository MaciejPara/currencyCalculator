import React, { Component } from "react";
//stateless functional component
class Rate extends Component {
  render() {
    return (
      <div className="Rate">
        <h6>{this.props.rate}</h6>
      </div>
    );
  }
}
export default Rate;
