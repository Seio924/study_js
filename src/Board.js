import Dice from "./Dice";

function Board({ name, color, num, getHistory }) {
  const total_score = getHistory.reduce((a, b) => a + b, 0);

  return (
    <div>
      <p>{name}</p>
      <Dice color={color} num={num}></Dice>
      <p>총점</p>
      <p>{total_score}</p>
      <p>기록</p>
      <p>{getHistory.join(",")}</p>
    </div>
  );
}

export default Board;
