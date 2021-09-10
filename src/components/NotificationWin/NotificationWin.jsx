import styles from './NotificationWin.module.css'

const NotificationWin = ({winner, onClick}) => {
    return(
        <h3>
          Win {winner} <button onClick={onClick}>start again?</button>
        </h3>
    )
}

export default NotificationWin