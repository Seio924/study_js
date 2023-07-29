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

  function handleRandom() {
    const nextNum = getRandomNumber(6);
    setNum(nextNum);
    setGetMyHistory([...getMyHistory, nextNum]);
  }

  function handleInit() {
    setNum(1);
    setGetMyHistory([]);
  }

  return (
    <div>
      <div>
        <img src={dice_logo}></img>
        <p>주사위게임</p>
      </div>
      <div>
        <Button onClick={handleRandom}>던지기</Button>
        <Button onClick={handleInit}>처음부터</Button>
      </div>
      <Board name="나" color="blue" num={num} getHistory={getMyHistory}></Board>
      <Board
        name="상대"
        color="red"
        num={num}
        getHistory={getMyHistory}
      ></Board>
    </div>
  );
}

export default App;
