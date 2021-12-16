import React from "react";
import "../App.css";

const Dice = (props) => {
  return (
    <div className="Dice">
      <button onClick={props.onClick} value={props.value}>
        Roll Dice
      </button>
    </div>
  );
};
export default Dice;
