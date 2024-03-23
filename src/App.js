import "./App.css";
import Box from "./component/Box";
import rockButton from "./images/rockButton.png";
import scissorsButton from "./images/scissorsButton.png";
import paperButton from "./images/paperButton.png";
import { useState } from "react";

//1. 2 boxes including title, img, result.
//2. Rock, paper, scissor button, result.
//3. When the user click the button, change box of title, img to match with the button is clicked.
//4. For computer, item is selected randomly.
//5. based on the result of 3 and 4, show who's win
//6. box's colour changes when win to green, lose to red or tie to black

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

function App() {
  const [userSelect, setUserSelect] = useState(choice.paper);
  const [computerSelect, setComputerSelect] = useState(choice.paper);
  const [result, setResult] = useState(" ");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    // user === computer then tie
    // user === "rock", computer === scissors then win, paper then lose
    // user === "paper", computer === rock then win, scissors then lose
    // user === "scissors", computer === paper then win, rock then lose

    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array:", itemArray);

    let randomItem = Math.floor(Math.random() * 3);
    console.log("random value:", randomItem);

    let final = itemArray[randomItem];
    console.log("final:", final);

    return choice[final];
  };

  return (
    <div>
      <h1 className="gameTitle">Rock paper Scissors</h1>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>
          <img src={rockButton} className="play-button" alt="Rock button" />
        </button>
        <button onClick={() => play("paper")}>
          <img src={paperButton} className="play-button" alt="Paper button" />
        </button>
        <button onClick={() => play("scissors")}>
          <img
            src={scissorsButton}
            className="play-button"
            alt="Scissors button"
          />
        </button>
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default App;
