import React from "react";
import "../App.css";

const Player = (props) => {
  let active = props.active;

  return (
    <div id={props.id} className="Player">
      Player {props.id}
      <div className={props.score}>{props.score}</div>
      <div className={props.total}>{props.total}</div>
    </div>
  );
};
export default Player;
