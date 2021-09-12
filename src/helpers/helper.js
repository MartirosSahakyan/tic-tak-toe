export function changeMatrixElement(matrix, row, col, symbol) {
  return matrix.map((el, i) => {
    if (i === row) {
      return el.map((el, i) => {
        if (i === col && el === null) {
          return (el = symbol);
        } else {
          return el;
        }
      });
    } else {
      return el;
    }
  });
}

export function checkDraw(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === null) return false;
    }
  }
  return true;
}

export function emptyMatrix(board) {
  return board.map((el) => {
    return el.map((el) => (el = null));
  });
}

export function findWinner(matrix) {
  let winner = "";
  const diagonal = [];
  const reverseDiagonal = [];

  function checkRowWin(arr) {
    if (arr.some((el) => el !== null)) {
      if (arr[0] === arr[1] && arr[1] === arr[2]) {
        winner = arr[0];
      }
    }
  }
  //row winner
  for (let i = 0; i < matrix.length; i++) {
    checkRowWin(matrix[i]);
  }

  for (let i = 0; i < matrix.length; i++) {
    const columnArr = [];
    for (let j = 0; j < matrix.length; j++) {
      columnArr.push(matrix[j][i]);

      if (i === j) {
        diagonal.push(matrix[i][j]);
      }

      if (i + j === 2) {
        reverseDiagonal.push(matrix[i][j]);
      }
    }
    // column winner
    checkRowWin(columnArr);
  }

  checkRowWin(diagonal);
  checkRowWin(reverseDiagonal);

  if (winner) {
    return winner;
  }
}

export function changeNextPlayer(player){
  return player = player === "X" ? "O" : "X"
}