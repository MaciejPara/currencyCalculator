import React, { Component } from "react";
import "./css/selects.css";
//stateless functional component
class Selects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: ""
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  componentDidMount() {
    const { defaultCurrencys } = this.props;
    this.setState({
      value1: defaultCurrencys[0].value,
      value2: defaultCurrencys[1].value
    });
    // this.setState({ value1: "USD" });
  }
  handleChange1(sel) {
    let val = sel.target.value;

    this.setState({ value1: val });
    let tab = [val, this.state.value2];
    this.props.onSelect(tab);
  }
  handleChange2(sel) {
    let val = sel.target.value;

    this.setState({ value2: val });
    let tab = [this.state.value1, val];
    this.props.onSelect(tab);
  }
  render() {
    const { currencys } = this.props;
    return (
      <div className="Selects">
        <div className="selectsInner">
          <div>
            {/* <Select
              currencys={currencys}
              selected={defaultCurrencys[0].value}
            /> */}
            <select value={this.state.value1} onChange={this.handleChange1}>
              {currencys.map(e => (
                <option key={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
          <div>
            {/* <Select
              currencys={currencys}
              selected={defaultCurrencys[1].value}
            /> */}
            <select value={this.state.value2} onChange={this.handleChange2}>
              {currencys.map(e => (
                <option key={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Selects;
