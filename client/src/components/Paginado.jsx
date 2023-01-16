import React from "react";
import styles from '../styles/Paginado.module.css';

export default function Paginado({ allDogs, dogsPage, paginado, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allDogs / dogsPage); i++) {
        pageNumbers.push(i)
    }

    const handlePreviousPage = (e) => {
        e.preventDefault();
        if (currentPage - 1 > 0) {
            return paginado(currentPage - 1)
        } else {
            return paginado(currentPage)
        }
    }
    const handleNextPage = (e) => {
        e.preventDefault();
        if (currentPage + 1 <= (Math.ceil(allDogs / dogsPage))) {
            return paginado(currentPage + 1)
        } else {
            return paginado(currentPage)
        }
    }

    return (
        <nav className={styles.paginado}>
            <ul className={styles.listPag}>
                {pageNumbers && <><a onClick={(e) => handlePreviousPage(e)} href=" " className={styles.navButtons}>Prev</a>
                    <li className={styles.currentPage}>{currentPage}</li>
                    <a onClick={(e) => handleNextPage(e)} href=" " className={styles.navButtons}>Next</a></>}
            </ul>
        </nav>
    )
}