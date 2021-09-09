import styles from "./Square.module.css";

export function Square({ symbol, ...props }) {
  return (
    <div className={styles.square}>
      <span className={styles.symbol}>{symbol}</span>
    </div>
  );
}
