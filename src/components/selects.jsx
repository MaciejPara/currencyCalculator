import React from "react";
import Select from "./select";
import "./css/selects.css";
//stateless functional component
const Selects = () => {
  return (
    <div className="Selects">
      <div className="selectsInner">
        <div>
          <Select />
        </div>
        <div>
          <Select />
        </div>
      </div>
    </div>
  );
};
export default Selects;
