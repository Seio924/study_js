import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, num, getHistory, className = "" }) {
  const total_score = getHistory.reduce((a, b) => a + b, 0);
  const cn_heading = `Board-heading`;
  const cn_winner = `Board ${className}`;

  return (
    <div className={cn_winner}>
      <p className={cn_heading}>{name}</p>
      <Dice color={color} num={num}></Dice>
      <p className={cn_heading}>총점</p>
      <p>{total_score}</p>
      <p className={cn_heading}>기록</p>
      <p>{getHistory.join(",")}</p>
    </div>
  );
}

export default Board;
