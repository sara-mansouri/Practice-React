import React, { Component } from "react";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ACard: "",
      BCard: "",
      BScore: 0,
      AScore: 0,
      currentRoundRresults: "",
    };
    this.resetGame = this.resetGame.bind(this);
    this.gameOn = this.gameOn.bind(this);
  }

  resetGame() {
    this.setState({
      AScore: 0,
      BScore: 0,
    });
  }
  gameOn(props, e) {
    e.preventDefault();
    let AChoice = props;

    let CartStates = ["Rock", "Paper", "Scissors"];
    let ranIndex = Math.floor(Math.random() * 3);
    let BChoice = CartStates[ranIndex];

    console.log("ACard:" + AChoice);
    console.log("BCard:" + BChoice);

    if (this.state.ACard === this.state.BCard) {
      this.setState({
        ACard: AChoice,
        BCard: BChoice,
        currentRoundRresults: "Tie!",
      });
      return;
    }
    if (
      (AChoice === "Rock" && BChoice === "Scissors") ||
      (AChoice === "Paper" && BChoice === "Rock") ||
      (AChoice === "Scissors" && BChoice === "Paper")
    ) {
      this.setState({
        ACard: AChoice,
        BCard: BChoice,
        AScore: this.state.AScore + 1,
        currentRoundRresults: "You Won! :)",
      });
      return;
    } else {
      this.setState({
        ACard: AChoice,
        BCard: BChoice,
        BScore: this.state.BScore + 1,
        currentRoundRresults: "Computer Won! :(",
      });
      return;
    }
  }

  componentDidUpdate() {
    if (this.state.AScore === 5) {
      alert("You Won the game!");
      this.resetGame();
    } else if (this.state.BScore === 5) {
      alert("Computer Won the game!");
      this.resetGame();
    }
  }
  render() {
    return (
      <div>
        <div className="images">
          <img
            onClick={(e) => this.gameOn("Rock", e)}
            src={rock}
            className="rpsImg"
            alt="Rock"
            style={{ height: 150 }}
          />
          <img
            onClick={(e) => this.gameOn("Paper", e)}
            src={paper}
            className="rpsImg"
            alt="paper"
            style={{ height: 150 }}
          />
          <img
            onClick={(e) => this.gameOn("Scissors", e)}
            src={scissors}
            className="rpsImg"
            alt="scissors"
            style={{ height: 150 }}
          />

          {/* <img
            src={"'"+${this.state.BCard}+"'"}
            className="rpsImg"
            alt="computer choice"
            style={{ width: 100 }}
          /> */}
        </div>
        <div className="currentRoundSelections">
          <p>Your Choice: {this.state.ACard} </p>
          <p>Computer Choice :{this.state.BCard} </p>
          <p>{this.state.currentRoundRresults}</p>
        </div>
        <p className="scores">
          {this.state.AScore}-{this.state.BScore}
        </p>
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }
}

export default Scoreboard;
