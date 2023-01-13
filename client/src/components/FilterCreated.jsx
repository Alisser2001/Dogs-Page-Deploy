import { useDispatch } from "react-redux";
import styles from "../styles/FilterCreated.module.css";
import { filterDogsByCreation } from "../actions";

export default function FilterCreated({ setCurrentPage, handleFilterButton }) {
    const dispatch = useDispatch();

    function handleFilterStatusCreation(e) {
        e.preventDefault();
        dispatch(filterDogsByCreation(e.target.value));
        handleFilterButton(e)
        setCurrentPage(1);
    }

    return (
        <div className={styles.filterCreated}>
            <h4 className={styles.filterCreaTitle}>Creation: </h4>
            <select
                onChange={e => { return handleFilterStatusCreation(e) }}
                className={styles.selectCreated}>
                <option defaultValue="All" value="All">All</option>
                <option value="Created">Created</option>
                <option value="Existing">Existing</option>
            </select>
        </div>
    )
}