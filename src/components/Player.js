import React from "react";
import "../App.css";

const Player = (props) => {
  let active = props.active;
  let backColor = active ? "rgb(189, 184, 184)" : "white";
  return (
    <div style={{ backgroundColor: backColor }}>
      <div id={props.id} className="Player">
        <h1>Player {props.id}</h1>
        <h2>Total</h2>
        <div className={props.total}> {props.total}</div>
        <h3>Current</h3>
        <div className={props.score}> {props.score}</div>
      </div>
    </div>
  );
};
export default Player;
