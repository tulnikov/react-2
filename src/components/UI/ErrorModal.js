import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from "./Button";


const ErrorModal = (props) => {

    return (
        <div>
            <div className={styles.backdrop}>

            </div>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={styles.actions}>
                <Button>Закрыть</Button>
            </footer>
        </Card>
        </div>
    )
}
export default ErrorModal;