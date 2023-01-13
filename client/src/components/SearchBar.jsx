import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../actions";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputName(e) {
        e.preventDefault();
        setName(e.target.value);
        dispatch(getDogName(name));
        setCurrentPage(1);
    }
    function handleSubmitName(e) {
        e.preventDefault();
        dispatch(getDogName(name));
        setCurrentPage(1);
    }
    return (
        <div className={styles.navbar}>
            <input
                type="text"
                placeholder="Search by name..." onChange={e => { return handleInputName(e) }}
                className={styles.textInput} />
            <a
                onClick={e => { return handleSubmitName(e) }}
                className={styles.submitInput} />
        </div>
    )
}