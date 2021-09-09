import { Square } from "./Square/Square";
import styles from "./TicTakToe.module.css";

export function TicTakToe() {
  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Square symbol="O" />
        <Square symbol="X" />
        <Square symbol="O" />
      </div>
      <div className={styles.row}>
        <Square symbol="X" />
        <Square symbol={null} />
        <Square symbol="X" />
      </div>
      <div className={styles.row}>
        <Square symbol="X" />
        <Square symbol="X" />
        <Square symbol="X" />
      </div>
    </div>
  );
}
