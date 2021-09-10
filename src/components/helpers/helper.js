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