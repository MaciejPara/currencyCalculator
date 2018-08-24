import React from "react";
import Selects from "./selects";
import Rate from "./rate";
import Exchange from "./exchange";
import "./css/panel.css";
//stateless functional component
const Panel = () => {
  return (
    <div className="Panel inner">
      <div>
        <h2>I'd like to change</h2>
      </div>
      <Selects />
      <Rate />
      <Exchange />
    </div>
  );
};
export default Panel;
