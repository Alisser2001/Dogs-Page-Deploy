import { useDispatch } from "react-redux";
import styles from "../styles/OrderByAlph.module.css";
import { orderDogsByAlphabetic } from "../actions";

export default function OrderByAlph({ setCurrentPage, setOrder, handleFilterButton }) {
    const dispatch = useDispatch();

    function handleOrderStatusAlphabetic(e) {
        e.preventDefault();
        dispatch(orderDogsByAlphabetic(e.target.value));
        handleFilterButton(e);
        setCurrentPage(1);
        setOrder(`Orden: ${e.target.value}`)
    }

    return (
        <div className={styles.alfabeticOrder}>
            <h4 className={styles.orderAlphTitle}>Alphabetical:</h4>
            <select
                onChange={e => { return handleOrderStatusAlphabetic(e) }}
                className={styles.selectAlph}>
                <option defaultValue="All" value="All">All</option>
                <option value="Asce">Ascending</option>
                <option value="Desc">Descending</option>
            </select>
        </div>
    )
}