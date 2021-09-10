import styles from "./Square.module.css";

export default function Square({ symbol, i, onClick, player }) {
  return (
    <div className={styles.square} onClick={() => onClick(i, player)}>
      <span className={styles.symbol}>{symbol}</span>
    </div>
  );
}
