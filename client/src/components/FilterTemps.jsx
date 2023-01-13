import styles from "../styles/FilterTemps.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterDogsByTemperament } from "../actions";

export default function FilterTemps({ setCurrentPage, handleFilterButton }) {
    const dispatch = useDispatch();
    const allTemps = useSelector((state) => state.temps);

    function handleFilterStatusTemperament(e) {
        e.preventDefault();
        dispatch(filterDogsByTemperament(e.target.value));
        handleFilterButton(e)
        setCurrentPage(1)
    }

    return (
        <div className={styles.filterTemps}>
            <h4 className={styles.filterTempTitle}>Temperament:</h4>
            <select
                onChange={e => { return handleFilterStatusTemperament(e) }}
                className={styles.selectTemps}>
                <option defaultValue="All" value="All">All</option>
                {allTemps && allTemps.map((temp, index) => {
                    return (
                        <option value={temp.name} key={index}>{temp.name}</option>
                    )
                })}
            </select>
        </div>
    )
}