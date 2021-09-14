import styles from "./Scoreboard.module.css";
import cn from "classnames";

const Scoreboard = () => {
  return (
    <div className={styles.board}>
      <header className={styles.header}>
        <div className={cn(styles.title, styles.borderRight)}>X</div>
        <div className={styles.title}>O</div>
      </header>
      <main className={styles.main}>
        <div className={cn(styles.column, styles.borderRight)}>
          <div>1</div>
          <div>-</div>
          <div>0</div>
        </div>
        <div className={styles.column}>
          <div>0</div>
          <div>-</div>
          <div>1</div>
        </div>
      </main>
      {/* <p>total</p> */}
      <footer className={styles.footer}>
        <div className={cn(styles.title, styles.borderRight)}>X</div>
        <div className={styles.title}>O</div>
      </footer>
    </div>
  );
};

export default Scoreboard;
