import Form from "./Form";
import DogCreated from "./DogCreated";
import { useState } from "react";
import styles from "../styles/CreateDogResponsive.module.css";
import createdDogs from "../img/6.webp";

export default function CreateDogResponsive({
    infoNewDog,
    setInfoNewDog,
    tempsNewDog,
    created,
    handleTemps,
    setCreated,
    handleDeleteTemp
}) {
    const [sideCreate, setSideCreate] = useState("right");
    const handleSide = (e) => {
        e.preventDefault();
        if (sideCreate === "right") {
            setSideCreate("left")
        } else if (sideCreate === "left") {
            setSideCreate("right")
        }
    }
    console.log(1 && 0 && 1)
    return (
        <>
            {created && <div className={styles.createdArea}>
                <img src={createdDogs} className={styles.createdImg} />
                <h1 className={styles.createdTitle}>The dog has been created</h1>
            </div>}
            {sideCreate === "right" && !created && <Form
                infoNewDog={infoNewDog}
                setInfoNewDog={setInfoNewDog}
                tempsNewDog={tempsNewDog}
                handleTemps={handleTemps}
                setCreated={setCreated}
                handleSide={handleSide} />}
            {sideCreate === "left" && <DogCreated
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
                handleDeleteTemp={handleDeleteTemp}
                handleSide={handleSide} />}
        </>
    )
}