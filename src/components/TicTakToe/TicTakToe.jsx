import { useState, useEffect } from "react";
import styles from "./TicTakToe.module.css";
import {
  changeMatrixElement,
  changeNextPlayer,
  checkDraw,
  emptyMatrix,
  findWinner,
} from "../../helpers/helper";
import NotificationIsDraw from "../NotificationIsDraw/NotificationIsDraw";
import Square from "../Square/Square";
import NextPlayer from "../NextPlayer/NextPlayer";
import NotificationWin from "../NotificationWin/NotificationWin";
import ChoosePlayer from "../ChoosePlayer/ChoosePlayer";

export function TicTakToe() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [startWith, setStartWith] = useState("X");
  const [nextPlayer, setNextPlayer] = useState(startWith);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("");
  const [history, setHistory] = useState({ X: [], O: [] });

  const handleSquareClick = (i, nextPlayer) => {
    switch (i) {
      case 0:
        setBoard(changeMatrixElement(board, 0, 0, nextPlayer));
        if (!board[0][0]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 1:
        setBoard(changeMatrixElement(board, 0, 1, nextPlayer));
        if (!board[0][1]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 2:
        setBoard(changeMatrixElement(board, 0, 2, nextPlayer));
        if (!board[0][2]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 3:
        setBoard(changeMatrixElement(board, 1, 0, nextPlayer));
        if (!board[1][0]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 4:
        setBoard(changeMatrixElement(board, 1, 1, nextPlayer));
        if (!board[1][1]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 5:
        setBoard(changeMatrixElement(board, 1, 2, nextPlayer));
        if (!board[1][2]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 6:
        setBoard(changeMatrixElement(board, 2, 0, nextPlayer));
        if (!board[2][0]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 7:
        setBoard(changeMatrixElement(board, 2, 1, nextPlayer));
        if (!board[2][1]) setNextPlayer(changeNextPlayer(nextPlayer));
        break;
      case 8:
        setBoard(changeMatrixElement(board, 2, 2, nextPlayer));
        if (!board[2][2]) setNextPlayer(changeNextPlayer(nextPlayer));
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

  const handleChangePlayer = ({ target: { value } }) => {
    setStartWith(value);
    setNextPlayer(value);
  };

  useEffect(() => {
    if (findWinner(board)) {
      setWinner(findWinner(board));
    } else if (checkDraw(board)) {
      setIsDraw(!isDraw);
      setHistory({
        ...history,
        X: [...history.X, 0],
        O: [...history.O, 0],
      });
    }
  }, [board]);

  useEffect(() => {
    if (winner === "X") {
      setHistory({
        ...history,
        X: [...history.X, "-"],
        O: [...history.O, "-"],
      });
    }
    if (winner === "O") {
      setHistory({
        ...history,
        X: [...history.X, 0],
        O: [...history.O, 1],
      });
    }
  }, [winner]);

  return (
    <>
      {isDraw && <NotificationIsDraw onClick={handleStartAgain} />}

      <ChoosePlayer value={startWith} handleChange={handleChangePlayer} />

      <NextPlayer player={nextPlayer} />

      {winner && <NotificationWin winner={winner} onClick={handleStartAgain} />}

      <div className={styles.board}>
        {board.flat().map((square, index) => {
          return (
            <Square
              key={index}
              symbol={square}
              player={nextPlayer}
              i={index}
              onClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
}
