import styles from "../styles/Orders.module.css";
import OrderByAlph from "./OrderByAlph";
import OrderByWeight from "./OrderByWeight";

export default function Orders({ setCurrentPage, setOrder, handleFilterButton }) {
    return (
        <div className={styles.orderButtons}>
            <h3>Sort by: </h3>
            <OrderByAlph setCurrentPage={setCurrentPage} setOrder={setOrder} handleFilterButton={handleFilterButton}/>
            <OrderByWeight setCurrentPage={setCurrentPage} setOrder={setOrder} handleFilterButton={handleFilterButton}/>
        </div>
    )
}