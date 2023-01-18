import React from "react";
import styles from '../styles/DogCreated.module.css';
import { Link } from "react-router-dom";

export default function Dog({
    name,
    temperament,
    minWeight,
    maxWeight,
    minHeight,
    maxHeight,
    minLife,
    maxLife,
    image,
    setViewCreated,
    handleDeleteTemp
}) {
    return (
        <div className={styles.dogCreated}>
            <h1 className={styles.createdTitle}>Dog Created:</h1>
            <div className={styles.dog}>
                <h1 className={styles.dogName}>{name}</h1>
                <img src={image} className={styles.dogImg} />
                <div className={styles.info}>
                    {minLife && maxLife && <h3 className={styles.dogLife}>{minLife} - {maxLife} Years of life</h3>}
                    {minHeight && maxHeight && <h3 className={styles.dogHeight}>{minHeight} - {maxHeight} Cm's</h3>}
                    {minWeight && maxWeight && <h3 className={styles.dogWeight}>{minWeight} - {maxWeight} Kg's</h3>}
                    <div className={styles.tempsArea}>
                        {temperament.map((temp, index) => {
                            return (
                                <div className={styles.tempLabel} key={index}>
                                    <label className={styles.tempName}>{index + 1}. {temp} </label>
                                    <button value={temp} className={styles.buttonLabel} onClick={e => { return handleDeleteTemp(e) }}>x</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.backArea}>
                <Link to="/home" className={styles.backButton} onClick={e => {
                    e.preventDefault();
                    setViewCreated("form")
                }} />
                <h3 className={styles.backTitle}>Back to home</h3>
            </div>
            <div className={styles.backFormArea}>
                <Link to="/dog" className={styles.backFormButton} onClick={e => {
                    e.preventDefault();
                    setViewCreated("form")
                }} />
                <h3 className={styles.backFormTitle}>Back to form</h3>
            </div>
        </div >
    )
}
