import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";
import rockButton from "./images/rockButton.png";
import scissorsButton from "./images/scissorsButton.png";
import paperButton from "./images/paperButton.png";

const choice = {
  rock: {
    name: "Rock",
    img: "https://dilipagarwal001.github.io/Rock-Paper-Scissor-Game/images/rock.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://dilipagarwal001.github.io/Rock-Paper-Scissor-Game/images/paper.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://dilipagarwal001.github.io/Rock-Paper-Scissor-Game/images/scissors.png",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice.paper,
      computerSelect: choice.paper,
      result: " ",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array:", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value:", randomItem);

    let final = itemArray[randomItem];
    console.log("final:", final);

    return choice[final];
  };

  render() {
    return (
      <div>
        <h1 className="gameTitle">Rock paper Scissors</h1>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("rock")}>
            <img src={rockButton} className="play-button" alt="Rock button" />
          </button>
          <button onClick={() => this.play("paper")}>
            <img src={paperButton} className="play-button" alt="Paper button" />
          </button>
          <button onClick={() => this.play("scissors")}>
            <img
              src={scissorsButton}
              className="play-button"
              alt="Scissors button"
            />
          </button>
        </div>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}
