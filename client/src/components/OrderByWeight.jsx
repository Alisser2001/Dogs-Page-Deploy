import { useDispatch } from "react-redux";
import styles from "../styles/OrderByWeight.module.css";
import { orderDogsByWeight } from "../actions";

export default function OrderByWeight({ setCurrentPage, setOrder, handleFilterButton }) {
    const dispatch = useDispatch();

    function handleOrderStatusWeight(e) {
        e.preventDefault();
        dispatch(orderDogsByWeight(e.target.value));
        handleFilterButton(e);
        setCurrentPage(1);
        setOrder(`Order: ${e.target.value}`)
    }

    return (
        <div className={styles.weightOrder}>
            <h4 className={styles.orderWeightTitle}>Weight:</h4>
            <select
                onChange={e => { return handleOrderStatusWeight(e) }}
                className={styles.selectWeight}>
                <option defaultValue="All" value="All">All</option>
                <option value="Asce">Ascending</option>
                <option value="Desc">Descending</option>
            </select>
        </div>
    )
}