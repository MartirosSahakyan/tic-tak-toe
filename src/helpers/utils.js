export function changeNextPlayer(player) {
  return (player = player === "X" ? "O" : "X");
}

export function sumArray(arr) {
  return arr.reduce((acc, el) => {
    if (typeof el === "number") {
      return (acc += el);
    }
    return acc;
  }, 0);
}
