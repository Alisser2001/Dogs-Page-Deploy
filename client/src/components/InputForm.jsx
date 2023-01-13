import styles from "../styles/InputForm.module.css"

export default function InputForm({ name, required, validate, title, onChange, register }) {
    return (
        <div className={styles.inputArea}>
            <label>{title}:</label>
            <input
                {...register(name, { required: required, validate: validate })}
                className={styles.input}
                onChange={onChange}/>
        </div>
    )
}