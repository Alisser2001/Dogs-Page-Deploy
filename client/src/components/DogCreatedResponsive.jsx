import React from "react";
import styles from '../styles/DogCreatedResponsive.module.css';
import { useHistory } from "react-router-dom";

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
    handleDeleteTemp,
    setViewCreated
}) {
    const history = useHistory();
    const handleToForm=(e)=>{
        if(e==="home"){
            setViewCreated("form");
            history.push("/home")
        } else if(e==="form"){
            setViewCreated("form");
            history.push("/dog")
        }
    }
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
                <a className={styles.backButton} onClick={e=>handleToForm("home")}/>
                <h3 className={styles.backTitle}>Back to home</h3>
            </div>
            <div className={styles.backFormArea}>
                <a className={styles.backFormButton} onClick={e=>handleToForm("form")}/>
                <h3 className={styles.backFormTitle}>Back to form</h3>
            </div>
        </div >
    )
}
