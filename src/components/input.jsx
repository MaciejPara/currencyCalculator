import React from "react";

//stateless functional component
const Input = () => {
  return (
    <div className="Input">
      <form>
        <div className="row">
          <div className="col-5">
            <input type="number" defaultValue="10" className="form-control" />
          </div>
          <div className="col-2">
            <img
              className="img-fluid"
              src="https://image.flaticon.com/icons/svg/25/25677.svg"
            />
          </div>
          <div className="col-5">
            <input type="number" defaultValue="10" className="form-control" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Input;
