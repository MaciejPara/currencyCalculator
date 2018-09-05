import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.newVal = 0;
    this.state = {
      defValues: [{ firstVal: 1 }, { secVal: 0 }]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  calcTransaction(inputValue) {
    this.newVal = inputValue * this.props.rate;
    this.newVal = this.newVal.toFixed(2);
    console.log(this.newVal + "--result");

    this.setState({
      defValues: [{ firstVal: inputValue }, { secVal: this.newVal }]
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
  } // updateSecInput method -- update result of calculation
  handleClick(e) {
    const { click } = this.props;

    let res = this.state.defValues[0].firstVal * this.props.rate;
    res = res.toFixed(2);

    click(this.state.defValues[0].firstVal, res);
  } // handleClick method -- should send click to parent and switching sides od currencys
  render() {
    let val = this.state.defValues[0].firstVal * this.props.rate;
    val = val.toFixed(2);
    //default value of result
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
                  this.calcTransaction(e.target.value);
                  this.updateSecInput();
                }}
              />
            </div>
            <div className="col-2">
              <img
                // className="img-fluid"
                src="https://image.flaticon.com/icons/svg/25/25677.svg"
                alt="img"
                onClick={this.handleClick}
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
