import styles from "../styles/Form.module.css";
import { heightValidator, weightValidator, nameValidator, yearsValidator } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "./InputForm";
import { postNewDog } from "../actions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({ infoNewDog, setInfoNewDog, tempsNewDog, handleTemps, setCreated }) {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temps);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState({
        years: undefined,
        height: undefined,
        weight: undefined,
        temps: undefined
    })
    const submitNewDog = (data) => {
        const newDog = {
            "name": data.name.toString().trim(),
            "minHeight": data.minHeight.toString(),
            "maxHeight": data.maxHeight.toString(),
            "minWeight": data.minWeight.toString(),
            "maxWeight": data.maxWeight.toString(),
            "image": data.image ? data.image : "https://img.freepik.com/foto-gratis/amistoso-perro-basenji-inteligente-dando-su-pata-cerca-aislado-blanco_346278-1626.jpg?w=2000"
        };
        newDog["life_span"] = data.min_life_span + " - " + data.max_life_span + " years";
        newDog["temperament"] = tempsNewDog.join(", ");
        if (parseInt(newDog.minHeight) >= parseInt(newDog.maxHeight)) {
            setError({...error, height: "The minimum height cannot be greater than the maximum height"});
        } else if (parseInt(newDog.minWeight) >= parseInt(newDog.maxWeight)) {
            setError({...error, weight: "The minimum weight cannot be greater than the maximum weight"});
        } else if (parseInt(data.min_life_span) >= parseInt(data.max_life_span)) {
            setError({...error, years: "The minimum life expectancy cannot be greater than the maximum life expectancy"});
        } else if(!tempsNewDog.length){
            setError({...error, temps: "Must choose at least one temperament"})
        }else {
            dispatch(postNewDog(newDog));
            setCreated(true);
        }
    }

    return (
        <form onSubmit={handleSubmit(submitNewDog)} className={styles.form}>
            <h1 className={styles.title}>Create your dog:</h1>
            <InputForm
                name="name"
                title="Name: "
                required={true}
                validate={nameValidator}
                onChange={e => {
                    e.preventDefault();
                    setInfoNewDog({ ...infoNewDog, name: e.target.value });
                }}
                register={register} />
            {errors.name && <p>The name is invalid</p>}
            <InputForm
                name="image"
                title="Image Url: "
                required={false}
                validate={undefined}
                onChange={e => {
                    e.preventDefault();
                    setInfoNewDog({ ...infoNewDog, image: e.target.value })
                }}
                register={register} />
            {errors.image && <p>Invalid field</p>}
            <div>
                <h3>Years of life</h3>
                <InputForm
                    name="min_life_span"
                    title="Min. Years: "
                    required={true}
                    validate={yearsValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, years: undefined});
                        setInfoNewDog({ ...infoNewDog, minLife: e.target.value });
                    }}
                    register={register} />
                {errors.min_life_span && <p>Age must be greater than 0 years</p>}
                <InputForm
                    name="max_life_span"
                    title="Max. Years: "
                    required={true}
                    validate={yearsValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, years: undefined});
                        setInfoNewDog({ ...infoNewDog, maxLife: e.target.value })
                    }}
                    register={register} />
                {errors.max_life_span && <p>Age must be less than 30 years</p>}
            </div>
            {error.years && <p>{error.years}</p>}
            <div>
                <h3>Height</h3>
                <InputForm
                    name="minHeight"
                    title="Min. Height: "
                    required={true}
                    validate={heightValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, height: undefined});
                        setInfoNewDog({ ...infoNewDog, minHeight: e.target.value })
                    }}
                    register={register} />
                {errors.minHeight && <p>Height must be greater than 0 cm</p>}
                <InputForm
                    name="maxHeight"
                    title="Max. Height: "
                    required={true}
                    validate={heightValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, height: undefined});
                        setInfoNewDog({ ...infoNewDog, maxHeight: e.target.value })
                    }}
                    register={register} />
                {errors.maxHeight && <p>Height must be less than 150 cm</p>}
            </div>
            {error.height && <p>{error.height}</p>}
            <div>
                <h3>Weight</h3>
                <InputForm
                    name="minWeight"
                    title="Min. Weight: "
                    required={true}
                    validate={weightValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, weight: undefined});
                        setInfoNewDog({ ...infoNewDog, minWeight: e.target.value })
                    }}
                    register={register} />
                {errors.minWeight && <p>Weight must be greater than 0 kg</p>}
                <InputForm
                    name="maxWeight"
                    title="Max. Weight: "
                    required={true}
                    validate={weightValidator}
                    onChange={e => {
                        e.preventDefault();
                        setError({...error, weight: undefined});
                        setInfoNewDog({ ...infoNewDog, maxWeight: e.target.value })
                    }}
                    register={register} />
                {errors.maxWeight && <p>Weight must be less than 100 kg</p>}
            </div>
            {error.weight && <p>{error.weight}</p>}
            <div className={styles.inputArea}>
                <label>Temperaments: </label>
                <select onChange={e => { 
                    e.preventDefault();
                    setError({...error, temps: undefined}); 
                    handleTemps(e) }} className={styles.input}>
                    {temperaments && temperaments.map((temp, index) => {
                        return (
                            <option value={temp?.name} key={index}>{temp?.name}</option>
                        )
                    })}
                </select>
            </div>
            {error.temps && <p>{error.temps}</p>}
            <div className={styles.createArea}>
                <input type="submit" value=" " className={styles.createButton} />
                <h2 className={styles.createTitle}>Create Dog</h2>
            </div>
            <div className={styles.backArea}>
                <Link to="/home" className={styles.backButton} onClick={e => setCreated(false)} />
                <h3 className={styles.backTitle}>Back to home</h3>
            </div>
        </form>
    )
}