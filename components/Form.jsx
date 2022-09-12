import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Form({ sendData = () => null }) {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Series numéricas</h2>

        <form className={styles.form}>
          <label>
            Introducir el número n:
            <input
              className={styles.input}
              type="number"
              name="name"
              placeholder="Introducir el número n"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <button
            disabled={!value}
            type="submit"
            value="Submit"
            className={styles.btnForm}
            onClick={(e) => {
              e.preventDefault()
              sendData(value)
            }}
          >
            Obtener
          </button>
        </form>
      </div>
    </div>
  );
}
