import Filters from "./Filters";
import Orders from "./Orders";
import styles from "../styles/Options.module.css";
import { getDogs } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Options({ setCurrentPage, setOrder }) {
    const dispatch = useDispatch();
    const [filterButtonState, setFilterButtonState] = useState(false);

    function handleDogs(e) {
        e.preventDefault();
        dispatch(getDogs());
        setCurrentPage(1);
    };
    function handleFilterButton(e) {
        e.preventDefault();
        setFilterButtonState(!filterButtonState);
    }
    return (
        <div>
            <div className={styles.options}>
                <a onClick={e => { return handleFilterButton(e) }} className={styles.filterButton} href=" " />
                <a onClick={e => { return handleDogs(e) }} className={styles.researchButton} href=" " />
                <Link to='/dog' className={styles.createButton}></Link>
            </div>
            {filterButtonState && <div className={styles.filterOptions}>
                <Filters setCurrentPage={setCurrentPage} handleFilterButton={handleFilterButton}/>
                <Orders setOrder={setOrder} setCurrentPage={setCurrentPage} handleFilterButton={handleFilterButton}/>
            </div>}
        </div>
    )
}