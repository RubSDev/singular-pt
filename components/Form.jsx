import styles from "../styles/Home.module.css";

export default function Form() {
  return (
   
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Series numéricas</h2>

            <form className={styles.form}>
              <label >
                Introducir el número n:
                <input
                className={styles.input}
                  type="number"
                  name="name"
                  placeholder="Introducir el número n"
                />
              </label>
              <button  type="submit" value="Submit" className={styles.btnForm}>
                Obtener
              </button>
            </form>
          </div>
        </div>
   
  );
}
