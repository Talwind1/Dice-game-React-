import React from "react";
import "../App.css";

class Game extends React.Component {
  state = {
    dices: [null, null],
    points: 20,
    players: [
      { currentScore: 0, totalScore: 0 },
      { currentScore: 0, totalScore: 0 },
    ],
    oneIsPlaying: true,
    winner: false,
  };

  rollDice = () => {
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);
    this.setState({ dices: [dice1, dice2] }, () => {
      console.log(Dice.value);
    });
  };

  render() {
    return (
      <div className="Game">
        <Dice onClick={this.rollDice} value={this.state.dices}>
          Roll Dice
        </Dice>
      </div>
    );
  }
}
export default Game;
