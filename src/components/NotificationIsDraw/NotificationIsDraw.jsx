import styles from "./NotificationIsDraw.module.css";

const NotificationIsDraw = ({ onClick }) => {
  return (
    <div>
      <h4>the game is draw</h4>{" "}
      <button onClick={onClick}>start again?</button>
    </div>
  );
};

export default NotificationIsDraw;
