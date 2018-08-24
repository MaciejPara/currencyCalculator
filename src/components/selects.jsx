import React, { Component } from "react";
import Select from "./select";
import "./css/selects.css";
//stateless functional component
class Selects extends Component {
  render() {
    const { currencys } = this.props;

    return (
      <div className="Selects">
        <div className="selectsInner">
          <div>
            <Select currencys={currencys} selected={"PLN"} />
          </div>
          <div>
            <Select currencys={currencys} selected={"EUR"} />
          </div>
        </div>
      </div>
    );
  }
}
export default Selects;
