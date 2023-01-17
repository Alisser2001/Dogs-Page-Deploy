import React from "react";
import styles from '../styles/Dog.module.css';
import { Link } from "react-router-dom";

export default function Dog({ name, temperament, minWeight, maxWeight, image, id }) {
    return (
        <div className={styles.dog}>
            <Link
                to={`/home/${id}`}
                style={{
                    textDecoration: "none"
                }}
                className={styles.dogName}>
                {name}
            </Link>
            <img src={image} className={styles.dogImg} />
            <div className={styles.info}>
                <h2 className={styles.dogTemp}>{temperament}</h2>
                <h3 className={styles.dogWeight}>{minWeight} - {maxWeight} Kg's</h3>
            </div>

        </div>
    )
}