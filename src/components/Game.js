import React from "react";
import "../App.css";
import Dice from "./Dice";
import Player from "./Player";
import Button from "./Button";

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
    console.log(dice1, dice2);
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

  initializeState = () => {
    this.setState((state) => {
      return {
        dices: [null, null],
        points: 20,
        players: [
          { currentScore: 0, totalScore: 0 },
          { currentScore: 0, totalScore: 0 },
        ],
        oneIsPlaying: true,
        winner: false,
      };
    });
  };

  render() {
    return (
      <div className="Game">
        <Player
          active={this.state.oneIsPlaying}
          id="1"
          score={this.state.players[0].currentScore}
          total={this.state.players[0].totalScore}
        />
        <div className="buttons">
          <Button funcClick={this.initializeState} title="➕New Game" />
          <Dice values={this.state.dices} />

          <Button funcClick={this.rollDice} title="🎲Roll Dice" />
          <Button funcClick={this.hold} title="🔻hold" />
          <h2>{this.state.points}</h2>
        </div>

        <Player
          active={!this.state.oneIsPlaying}
          id="2"
          score={this.state.players[1].currentScore}
          total={this.state.players[1].totalScore}
        />
      </div>
    );
  }
}
export default Game;
