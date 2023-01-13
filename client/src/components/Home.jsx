import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../actions";
import Dog from "./Dog";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import Options from "./Options";
import styles from "../styles/Home.module.css";
import Error404 from "./Error404";

//useDispatch proporciona acceso al store a todos los componentes de nuestra App

//useSelector permite a cada componente acceder a los estados almacenados en el store

//useEffect, en este caso, manda con dispatch todos los perros traídos de nuestro servidor
//Justo despues de que se renderiza el componente Home; su segundo parametro es una condición

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);
    useEffect(() => { dispatch(getDogs()) }, [dispatch]);
    useEffect(() => { dispatch(getTemperaments()) }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPage, setDogsPage] = useState(8);
    const [order, setOrder] = useState('');
    const lastIndex = currentPage * dogsPage;
    const firsIndex = lastIndex - dogsPage;
    const currentDogs = allDogs.slice(firsIndex, lastIndex);

    const paginado = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className={styles.home}>
            <SearchBar setCurrentPage={setCurrentPage} />
            <Options setCurrentPage={setCurrentPage} setOrder={setOrder} />
            <div className={styles.titleArea}>
                <h1>Filter Dogs</h1>
                <h1 className={styles.dogsTitle}>All Dogs</h1>
                <h1>Create Dog</h1>
            </div>
            <div className={styles.dogsArea}>
                {currentDogs.length ?
                    currentDogs.map((dog, index) => {
                        return (
                            <div key={index} className={styles.eachDog}>
                                <Dog
                                    name={dog.name}
                                    id={dog.id}
                                    image={dog.image}
                                    temperament={dog.temperament}
                                    minWeight={dog.minWeight}
                                    maxWeight={dog.maxWeight}
                                ></Dog>
                            </div>
                        )
                    }) :
                    <Error404 msg="The Dogs Has Not Been Found" back={false}/>}
            </div>
            <Paginado dogsPage={dogsPage} allDogs={allDogs.length} paginado={paginado} currentPage={currentPage}/>
        </div>
    )
}