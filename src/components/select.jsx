import React, { Component } from "react";

//stateless functional component
class Select extends Component {
  render() {
    return (
      <select defaultValue={this.props.selected}>
        {this.props.currencys.map(e => (
          <option key={e.id}>{e.name}</option>
        ))}
      </select>
    );
  }
}
export default Select;
