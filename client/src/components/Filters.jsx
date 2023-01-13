import styles from "../styles/Filters.module.css";
import FilterTemps from "./FilterTemps";
import FilterCreated from "./FilterCreated";


export default function Filters({ setCurrentPage, handleFilterButton}) {
    return (
        <div className={styles.filterButtons}>
            <h3>Filter by: </h3>
            <FilterTemps setCurrentPage={setCurrentPage} handleFilterButton={handleFilterButton}/>
            <FilterCreated setCurrentPage={setCurrentPage} handleFilterButton={handleFilterButton}/>
        </div>
    )
}