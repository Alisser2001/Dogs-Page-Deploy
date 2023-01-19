import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../actions";
import styles from "../styles/CreateDog.module.css";
import DogCreated from "./DogCreated";
import DogCreatedResponsive from "./DogCreatedResponsive";
import createdDogs from "../img/6.webp";
import Form from "./Form";
import FormResponsive from "./FormResponsive";

export default function CreateDog() {
    const dispatch = useDispatch();
    const [tempsNewDog, setTempsNewDog] = useState([]);
    const [created, setCreated] = useState(false);
    const [viewCreated, setViewCreated] = useState("form");
    const [infoNewDog, setInfoNewDog] = useState({
        name: "",
        image: "",
        minWeight: undefined,
        maxWeight: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        minLife: undefined,
        maxLife: undefined
    })

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    const handleTemps = (e) => {
        e.preventDefault();
        if (!tempsNewDog.some(el => el === e.target.value)) {
            setTempsNewDog([...tempsNewDog, e.target.value])
        }
    }

    const handleDeleteTemp = (e) => {
        e.preventDefault();
        let tempsSlice = tempsNewDog.filter(el => el !== e.target.value);
        setTempsNewDog(tempsSlice)
    }



    return (
        window.innerWidth > 720 ?
            <div className={styles.createDog}>
                {created && <div className={styles.createdArea}>
                    <img src={createdDogs} className={styles.createdImg} />
                    <h1 className={styles.createdTitle}>The dog has been created</h1>
                </div>}
                {!created && <Form
                    infoNewDog={infoNewDog}
                    setInfoNewDog={setInfoNewDog}
                    tempsNewDog={tempsNewDog}
                    handleTemps={handleTemps}
                    setCreated={setCreated} />}
                <DogCreated
                    name={infoNewDog.name}
                    temperament={tempsNewDog}
                    image={infoNewDog.image}
                    minHeight={infoNewDog.minHeight}
                    maxHeight={infoNewDog.maxHeight}
                    minWeight={infoNewDog.minWeight}
                    maxWeight={infoNewDog.maxWeight}
                    minLife={infoNewDog.minLife}
                    maxLife={infoNewDog.maxLife}
                    setCreated={setCreated}
                    handleDeleteTemp={handleDeleteTemp} />
            </div> :
            <div className={styles.createDog}>
                {viewCreated === "created" && <div className={styles.createdArea}>
                    <img src={createdDogs} className={styles.createdImg} />
                    <h1 className={styles.createdTitle}>The dog has been created</h1>
                    <a className={styles.viewDogButton} onClick={e => setViewCreated("view")} />
                    <h3 className={styles.viewDogTitle}>View Dog</h3>
                </div>}
                {viewCreated === "form" && <FormResponsive
                    infoNewDog={infoNewDog}
                    setInfoNewDog={setInfoNewDog}
                    tempsNewDog={tempsNewDog}
                    handleTemps={handleTemps}
                    setViewCreated={setViewCreated}
                />}
                {viewCreated === "view" && <DogCreatedResponsive
                    name={infoNewDog.name}
                    temperament={tempsNewDog}
                    image={infoNewDog.image}
                    minHeight={infoNewDog.minHeight}
                    maxHeight={infoNewDog.maxHeight}
                    minWeight={infoNewDog.minWeight}
                    maxWeight={infoNewDog.maxWeight}
                    minLife={infoNewDog.minLife}
                    maxLife={infoNewDog.maxLife}
                    handleDeleteTemp={handleDeleteTemp}
                    setViewCreated={setViewCreated}
                />}
            </div>
    )
}