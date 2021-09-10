import { useState } from "react";
import styles from "./TicTakToe.module.css";
import { Square } from "../Square/Square";
import {
  changeMatrixElement,
  checkDraw,
  emptyMatrix,
  findWinner,
} from "../../helpers/helper";
import { useEffect } from "react";
import NotificationIsDraw from "../NotificationIsDraw/NotificationIsDraw";
import CurrentPlayer from "../CurrentPlayer/CurrentPlayer";
import NotificationWin from "../NotificationWin/NotificationWin";

export function TicTakToe() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [player, setPlayer] = useState("X");
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("");

  const handleSquareClick = (i, player) => {
    switch (i) {
      case 0:
        setBoard(changeMatrixElement(board, 0, 0, player));
        if (!board[0][0]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 1:
        setBoard(changeMatrixElement(board, 0, 1, player));
        if (!board[0][1]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 2:
        setBoard(changeMatrixElement(board, 0, 2, player));
        if (!board[0][2]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 3:
        setBoard(changeMatrixElement(board, 1, 0, player));
        if (!board[1][0]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 4:
        setBoard(changeMatrixElement(board, 1, 1, player));
        if (!board[1][1]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 5:
        setBoard(changeMatrixElement(board, 1, 2, player));
        if (!board[1][2]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 6:
        setBoard(changeMatrixElement(board, 2, 0, player));
        if (!board[2][0]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 7:
        setBoard(changeMatrixElement(board, 2, 1, player));
        if (!board[2][1]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      case 8:
        setBoard(changeMatrixElement(board, 2, 2, player));
        if (!board[2][2]) setPlayer((player = player === "X" ? "O" : "X"));
        break;
      default:
        break;
    }
  };

  const handleStartAgain = () => {
    setIsDraw(false);
    setBoard(emptyMatrix(board));
    setWinner("");
  };

  useEffect(() => {
    if (findWinner(board)) {
      setWinner(findWinner(board));

    }else if (checkDraw(board)) {
      setIsDraw(!isDraw)
    }
    
  }, [board]);

  return (
    <>
      {isDraw && <NotificationIsDraw onClick={handleStartAgain} />}

      <CurrentPlayer player={player} />
     
      {winner && <NotificationWin winner={winner} onClick={handleStartAgain} />}
     
      <div className={styles.board}>
        {board.flat().map((square, index) => {
          return (
            <Square
              key={index}
              symbol={square}
              player={player}
              i={index}
              onClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
}
