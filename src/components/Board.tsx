import "./Board.css";
import { Box } from "./Box";
interface IBoard {
  board: string[];
  onClick: (index: number) => void;
}
export const Board = ({ board, onClick }: IBoard) => {
  return (
    <div className="board">
      {board.map((value, index) => {
        return (
          <Box value={value} onClick={() => value === null && onClick(index)} />
        );
      })}
    </div>
  );
};
