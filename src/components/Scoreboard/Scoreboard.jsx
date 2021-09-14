import styles from "./Scoreboard.module.css";
import cn from "classnames";
import { sumArray } from "../../helpers/utils";

const Scoreboard = ({ history }) => {
  return (
    <div className={styles.board}>
      <header className={styles.header}>
        <div className={cn(styles.title, styles.borderRight)}>X</div>
        <div className={styles.title}>O</div>
      </header>
      <main className={styles.main}>
        <div className={cn(styles.column, styles.borderRight)}>
          {history.X.map((el, i) => {
            return <div key={i}>{el} </div>;
          })}
        </div>
        <div className={styles.column}>
          {history.O.map((el, i) => {
            return <div key={i}>{el} </div>;
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={cn(styles.title, styles.borderRight)}>
          {sumArray(history.X)}
        </div>
        <div className={styles.title}>{sumArray(history.O)}</div>
      </footer>
    </div>
  );
};

export default Scoreboard;
