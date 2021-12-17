import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button onClick={props.funcClick} className="Button">
      {props.title}
    </button>
  );
};
export default Button;
