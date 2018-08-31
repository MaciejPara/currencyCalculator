import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defValues: [{ firstVal: 1 }, { secVal: 0 }]
    };
  }

  calctransaction(inputValue) {
    let newVal = inputValue * this.props.rate;
    newVal = newVal.toFixed(2);
    console.log(newVal + "--result");

    this.setState({
      defValues: [{ firstVal: inputValue }, { secVal: newVal }]
    }); // update state with new values
  } // calcTransaction -- calculate transaction by inputValue * current rate
  updateSecInput() {
    return (
      <input
        type="number"
        value={this.state.defValues[1].secVal}
        className="form-control"
      />
    );
  } // updateSecInput method -- like name sayed
  render() {
    let val = this.state.defValues[0].firstVal * this.props.rate;
    val = val.toFixed(2);
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
                  this.calctransaction(e.target.value);
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
