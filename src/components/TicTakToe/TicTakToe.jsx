import { useState, useEffect } from "react";

import styles from "./TicTakToe.module.css";

import {
  changeMatrixElement,
  checkDraw,
  emptyMatrix,
  findWinner,
} from "../../helpers/gameLogic";
import { changeNextPlayer } from "../../helpers/utils";

import Square from "../Square/Square";
import AlertDialog from "../AlertDialog/AlertDialog";
import ChoosePlayer from "../ChoosePlayer/ChoosePlayer";
import Scoreboard from "../Scoreboard/Scoreboard";

export function TicTakToe() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [startWith, setStartWith] = useState("");
  const [nextPlayer, setNextPlayer] = useState(startWith);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("");
  const [history, setHistory] = useState({ X: [], O: [] });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [choosePlayerOpen, setChoosePlayerOpen] = useState(true);

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
    setDialogOpen(false);
    setChoosePlayerOpen(true);
    setStartWith("");
  };

  const handleChangePlayer = ({ target: { value } }) => {
    setStartWith(value);
    setNextPlayer(value);
  };

  const handleStartGame = () => {
    if (startWith) setChoosePlayerOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (findWinner(board)) {
      setWinner(findWinner(board));
      setDialogOpen(true);
    } else if (checkDraw(board)) {
      setIsDraw(!isDraw);
      setDialogOpen(true);
      setHistory({
        ...history,
        X: [...history.X, "-"],
        O: [...history.O, "-"],
      });
    }
  }, [board]);

  useEffect(() => {
    if (winner === "X") {
      setHistory({
        ...history,
        X: [...history.X, 1],
        O: [...history.O, 0],
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
      {(winner || isDraw) && (
        <AlertDialog
          title={winner ? "W I N player " : "D R A W"}
          winner={winner}
          handleClose={handleDialogClose}
          handleStartAgain={handleStartAgain}
          open={dialogOpen}
        />
      )}

      <ChoosePlayer
        value={startWith}
        open={choosePlayerOpen}
        handleBtnClick={handleStartGame}
        handleRadioBtn={handleChangePlayer}
      />

      <h1 className={styles.title}>Tic Tac Toe</h1>

      <div className={styles.container}>
        <Scoreboard history={history} />
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
      </div>
    </>
  );
}
