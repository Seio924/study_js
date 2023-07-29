import dice_logo from "./assets/logo.png";
import Button from "./Button";
import Board from "./Board";
import { useState } from "react";
import "./App.css";

function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function App() {
  const [num, setNum] = useState(1);
  const [getMyHistory, setGetMyHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [getOtherHistory, setGetOtherHistory] = useState([]);
  const [win, setWin] = useState("App-board");
  const [lose, setLose] = useState("App-board");

  function handleRandom() {
    const nextNum = getRandomNumber(6);
    setNum(nextNum);
    setGetMyHistory([...getMyHistory, nextNum]);
    const nextOtherNum = getRandomNumber(6);
    setOtherNum(nextOtherNum);
    setGetOtherHistory([...getOtherHistory, nextOtherNum]);

    if (nextNum > nextOtherNum) {
      setWin("App-board Board-winner");
      setLose("App-board");
    } else if (nextNum < nextOtherNum) {
      setLose("App-board Board-winner");
      setWin("App-board");
    } else {
      setLose("App-board");
      setWin("App-board");
    }
  }

  function handleInit() {
    setNum(1);
    setGetMyHistory([]);
    setOtherNum(1);
    setGetOtherHistory([]);
    setLose("App-board");
    setWin("App-board");
  }

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={dice_logo}></img>
        <p className="App-title">주사위게임</p>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick={handleRandom}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleInit}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <Board
          className={win}
          name="나"
          color="blue"
          num={num}
          getHistory={getMyHistory}
        ></Board>
        <Board
          className={lose}
          name="상대"
          color="red"
          num={otherNum}
          getHistory={getOtherHistory}
        ></Board>
      </div>
    </div>
  );
}

export default App;
