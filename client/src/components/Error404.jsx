import styles from "../styles/Error404.module.css";
import notDogs from "../img/2.webp";
import {Link} from "react-router-dom";

export default function Error404({ msg, back=true }) {
    return (
        <div className={styles.containerErr}>
            <img src={notDogs} className={styles.errImg} />
            <h1 className={styles.errTitle}>{msg ? msg : "The Route Has Not Been Found"}</h1>
            {back && <div className={styles.backArea}>
                <Link to="/home" className={styles.backButton}/>
                <h3 className={styles.backTitle}>Back to home</h3>
            </div>}
        </div>
    )
}