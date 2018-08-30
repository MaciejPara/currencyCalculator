import React, { Component } from "react";
import Select from "./select";
import "./css/selects.css";
//stateless functional component
class Selects extends Component {
  render() {
    const { currencys, defaultCurrencys, handleDefaultRate } = this.props;

    return (
      <div className="Selects">
        <div className="selectsInner">
          <div>
            <Select
              currencys={currencys}
              selected={defaultCurrencys[0].value}
              onChange={handleDefaultRate}
            />
          </div>
          <div>
            <Select
              currencys={currencys}
              selected={defaultCurrencys[1].value}
              onChange={handleDefaultRate}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Selects;
