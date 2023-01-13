import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogId } from "../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDog } from "../actions";
import styles from "../styles/Details.module.css";
import Error404 from "./Error404";

export default function Details(props) {
    const myRegEx = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.detail);
    const [deleted, setDeleted] = useState(false);
    const [validateDelete, setValidateDelete] = useState(false);
    useEffect(() => {
        dispatch(getDogId(props.match.params.id))
    }, [dispatch]);
    function handleDeleteValidate(e) {
        e.preventDefault();
        setValidateDelete(true);
    }
    function handleDeleteDog(e) {
        e.preventDefault();
        dispatch(deleteDog(dog[0].id));
        setDeleted(true);
    }
    return (
        <div className={styles.detail}>
            {
                dog.length > 0 ?
                    <div className={styles.dog}>
                        <h1>{dog[0].name}</h1>
                        <div className={styles.dogInfo}>
                            <img src={dog[0].image} className={styles.dogImg} />
                            {validateDelete ?
                                <div className={styles.validateDelete}>
                                    <h2>Are you sure you want to delete this dog?</h2>
                                    <div className={styles.confimationButtons}>
                                        <button onClick={e => handleDeleteDog(e)}>Yes</button>
                                        <button onClick={e => setValidateDelete(false)}>No</button>
                                    </div></div> :
                                <div className={styles.dogThings}>
                                    <h2>{dog[0].temperament}</h2>
                                    <h3>Weight: {dog[0].minWeight} - {dog[0].maxWeight} Kg's</h3>
                                    <h3>Height: {dog[0].minHeight} - {dog[0].maxHeight} Cm's</h3>
                                    <h3>Years of life: {dog[0].life_span}</h3>
                                </div>}
                            {myRegEx.test(dog[0]?.id) && <><a className={styles.deleteButton} href=" " onClick={e => { return handleDeleteValidate(e) }} />
                                <h3 className={styles.deleteTitle}>Delete dog</h3></>
                            }
                            <Link to="/home" className={styles.backButton}>
                            </Link>
                            <h3 className={styles.backTitle}>Back to home</h3>
                        </div>
                    </div> :
                    <Error404 msg="Loading..." />
            }
            {deleted && <div className={styles.dogDeleted}>
                <a className={styles.deletedButton} />
                <h3 className={styles.deletedTitle}>The dog has been deleted</h3>
                <Link to="/home" className={styles.deletedBack}>
                </Link>
                <h3 className={styles.backDeletedTitle}>Back to home</h3></div>}
        </div>
    )
}