import { useState } from "react";

import { serie } from "./Calculation";

import styles from "../styles/Home.module.css";

export default function Result({ valueResult }) {
  const [result, setTesult] = useState(0);
  console.log("valueeee", valueResult);

  const { totalNumber } = serie(valueResult);

  console.log('S-----', serie(3))

  console.log("TOTAL NUMBER---", totalNumber);

  return (
    <>
      {!isNaN(totalNumber) && (
        <div className={styles.cardResult}>
          <p>El resultado del cálculo es: {totalNumber}</p>
        </div>
      )}
    </>
  );
}
