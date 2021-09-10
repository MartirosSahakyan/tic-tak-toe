import styles from "./Square.module.css";

export function Square({ symbol, i, onClick, player, ...props }) {
  return (
    <div className={styles.square} onClick={() => onClick(i, player)}>
      <span className={styles.symbol}>{symbol}</span>
    </div>
  );
}
