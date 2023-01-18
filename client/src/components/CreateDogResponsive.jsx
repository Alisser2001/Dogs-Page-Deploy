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
    const [viewCreated, setViewCreated] = useState(false);
    const handleViewCreated = (e) => {
        e.preventDefault();
        setViewCreated(!viewCreated)
    }
    return (
        <>
            {created && <div className={styles.createdArea}>
                <img src={createdDogs} className={styles.createdImg} />
                <h1 className={styles.createdTitle}>The dog has been created</h1>
                <a className={styles.viewDogButton} onClick={e=>handleViewCreated(e)}/>
                <h3 className={styles.viewDogTitle}>View Dog</h3>
            </div>}
            {!created && <Form
                infoNewDog={infoNewDog}
                setInfoNewDog={setInfoNewDog}
                tempsNewDog={tempsNewDog}
                handleTemps={handleTemps}
                setCreated={setCreated}
            />}
            {viewCreated && <DogCreated
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
                handleViewCreated={handleViewCreated}
            />}
        </>
    )
}

//Hacer el form de una sola pagina, con los botones para crear y para volver al home
//Al crear el perro, cargar el componente con el aviso de que ha sido creado
//El boton back to home y el boton view dog