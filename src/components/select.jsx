import React, { Component } from "react";

//stateless functional component
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange(sel) {
    console.log(sel.target.value);
    let val = sel.target.value;
    //this.setState({ value: val });
  }
  render() {
    //const { onSelect } = this.props;
    return (
      // <select defaultValue={}>
      <select value={this.state.value} onChange={this.handleChange}>
        {this.props.currencys.map(e => (
          <option key={e.id}>{e.name}</option>
        ))}
      </select>
    );
  }
}
export default Select;
