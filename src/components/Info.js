import React from "react";

const Info = (props) => {
  let start = props.start;
  let text;
  if (start) {
    text = <h1>{props.points}</h1>;
  } else {
    text = (
      <h1 style={{ backgroundColor: "#c0392b" }}>
        Player {`${props.winner}`} win the game!
      </h1>
    );
  }
  return <div className="Info">{text}</div>;
};
export default Info;
