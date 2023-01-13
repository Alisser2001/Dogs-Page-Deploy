import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>The<br />Dogs<br />Page</h1>
            <Link to='/home' className={styles.buttonInit}>
            </Link>
            <footer className={styles.footer}>By Alisser</footer>
        </div>
    )
}