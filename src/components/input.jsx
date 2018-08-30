import React, { Component } from "react";

class Input extends Component {
  state = {
    defValues: [{ firstVal: 10 }, { secVal: 0 }]
  };

  handleDefValues(e) {
    let newVal = this.props.rate * e;
    newVal = newVal.toFixed(2);
    console.log(newVal + "--pln");

    this.setState({ defValues: [{ firstVal: e }, { secVal: newVal }] });
  }
  handleDefValues2(e) {
    let newVal = e / this.props.rate;
    newVal = newVal.toFixed(2);
    console.log(newVal + "--eur");

    this.setState({ defValues: [{ firstVal: newVal }, { secVal: e }] });
  }
  updateSecInput() {
    return (
      <input
        type="number"
        value={this.state.defValues[1].secVal}
        className="form-control"
      />
    );
  }
  render() {
    let oper = this.state.defValues[0].firstVal * this.props.rate;
    let val = oper.toFixed(2);
    return (
      <div className="Input">
        <form>
          <div className="row">
            <div className="col-5">
              <input
                type="number"
                value={this.state.defValues[0].firstVal}
                className="form-control"
                onChange={e => {
                  this.handleDefValues(e.target.value);
                  this.updateSecInput();
                }}
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://image.flaticon.com/icons/svg/25/25677.svg"
                alt="img"
              />
            </div>
            <div className="col-5">
              {this.updateSecInput() && (
                <input
                  type="number"
                  value={val}
                  readOnly
                  className="form-control"
                />
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
