import React from "react";
import "../App.css";

const Player = (props) => {
  return (
    <div id={props.id} className="player">
      Player {props.id}
      <div className={props.score}>{props.score}</div>
      <div className={props.total}>{props.total}</div>
    </div>
  );
};
export default Player;

// score={props.score} total={props.total}
