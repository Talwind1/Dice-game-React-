import React from "react";
import "../App.css";
import Dice from "./Dice";
import Player from "./Player";

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
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    this.setState({ dices: [dice1, dice2] }, this.updatePlayerScore);
  };

  updatePlayerScore = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      players[0].currentScore =
        players[0].currentScore + this.state.dices[0] + this.state.dices[1];
    } else {
      players[1].currentScore =
        players[1].currentScore + this.state.dices[0] + this.state.dices[1];
    }
    this.setState({ players: players });
  };

  hold = () => {
    this.updateTotal();
    this.cleanCurrent();
    this.swichPlayers();
  };

  updateTotal = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      let value = this.state.players[0].currentScore;
      players[0].totalScore += value;
    } else {
      let value = this.state.players[1].currentScore;
      players[1].totalScore += value;
    }
    this.setState({ players: players });
  };

  cleanCurrent = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      players[0].currentScore = 0;
    } else {
      players[1].currentScore = 0;
    }
    this.setState({ players: players });
  };

  swichPlayers = () => {
    this.setState({ oneIsPlaying: !this.state.oneIsPlaying });
  };

  initializeState() {
    this.setState({
      dices: [null, null],
      points: 20,
      players: [
        { currentScore: 0, totalScore: 0 },
        { currentScore: 0, totalScore: 0 },
      ],
      oneIsPlaying: true,
      winner: false,
    });
  }

  render() {
    return (
      <div className="Game">
        <Player
          id="1"
          score={this.state.players[0].currentScore}
          total={this.state.players[0].totalScore}
        />
        <div className="buttons">
          <Dice onClick={this.rollDice}>Roll Dice</Dice>
          {/* 
          value={this.state.dices} */}
          <button onClick={this.initializeState}>New Game</button>
          <button onClick={this.hold}>hold</button>
        </div>

        <Player
          id="2"
          score={this.state.players[1].currentScore}
          total={this.state.players[1].totalScore}
        />
      </div>
    );
  }
}
export default Game;
