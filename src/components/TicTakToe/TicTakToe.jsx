import { useState, useEffect } from "react";
import styles from "./TicTakToe.module.css";
import {
  changeMatrixElement,
  checkDraw,
  emptyMatrix,
  findWinner,
} from "../../helpers/helper";
import NotificationIsDraw from "../NotificationIsDraw/NotificationIsDraw";
import Square  from "../Square/Square";
import CurrentPlayer from "../CurrentPlayer/CurrentPlayer";
import NotificationWin from "../NotificationWin/NotificationWin";
import ChoosePlayer from "../ChoosePlayer/ChoosePlayer";

export function TicTakToe() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  // const [startWith, setStartWith] = useState("X")
  const [currPlayer, setCurrPlayer] = useState(startWith);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("");

  const handleSquareClick = (i, currPlayer) => {
    switch (i) {
      case 0:
        setBoard(changeMatrixElement(board, 0, 0, currPlayer));
        if (!board[0][0]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 1:
        setBoard(changeMatrixElement(board, 0, 1, currPlayer));
        if (!board[0][1]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 2:
        setBoard(changeMatrixElement(board, 0, 2, currPlayer));
        if (!board[0][2]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 3:
        setBoard(changeMatrixElement(board, 1, 0, currPlayer));
        if (!board[1][0]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 4:
        setBoard(changeMatrixElement(board, 1, 1, currPlayer));
        if (!board[1][1]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 5:
        setBoard(changeMatrixElement(board, 1, 2, currPlayer));
        if (!board[1][2]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 6:
        setBoard(changeMatrixElement(board, 2, 0, currPlayer));
        if (!board[2][0]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 7:
        setBoard(changeMatrixElement(board, 2, 1, currPlayer));
        if (!board[2][1]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
        break;
      case 8:
        setBoard(changeMatrixElement(board, 2, 2, currPlayer));
        if (!board[2][2]) setCurrPlayer((currPlayer = currPlayer === "X" ? "O" : "X"));
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

  // const handleChangePlayer = (event) => {
  //   setStartWith(event.target.value);
  // };

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
      
      <ChoosePlayer value={startWith} handleChange={handleChangePlayer} />

      <CurrentPlayer player={currPlayer} />
     
      {winner && <NotificationWin winner={winner} onClick={handleStartAgain} />}
     
      <div className={styles.board}>
        {board.flat().map((square, index) => {
          return (
            <Square
              key={index}
              symbol={square}
              player={currPlayer}
              i={index}
              onClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
}
