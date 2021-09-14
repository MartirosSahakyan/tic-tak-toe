import styles from "./Square.module.css";
import cn from "classnames";

export default function Square({ symbol, i, onClick, player }) {
  return (
    <div
      className={cn(
        { [styles.squareX]: player === "X" && !symbol },
        { [styles.squareO]: player === "O" && !symbol },
        { [styles.squareFilled]: symbol },
        { [styles.squareEmpty]: !symbol }
      )}
      onClick={() => onClick(i, player)}
    >
      <span className={styles.symbol}>{symbol}</span>
    </div>
  );
}
