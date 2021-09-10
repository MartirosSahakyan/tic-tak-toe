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

export function emptyMatrix (board) {
  return board.map((el)=>{
    return el.map((el)=>el = null)
  })
}