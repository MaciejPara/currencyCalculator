import React, { Component } from "react";

//stateless functional component
class Select extends Component {
  render() {
    console.log(this.props.selected);
    return (
      <select defaultValue={this.props.selected}>
        {this.props.currencys.map(e => (
          <option key={e.id}>{e.value}</option>
        ))}
      </select>
    );
  }
}
export default Select;
