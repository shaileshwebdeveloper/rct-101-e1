import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
  // sample value to be replaced
    const [count, setCount] = useState(0)

    const handleIncrement = (value) =>{
      setCount(count + value)
    }


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleIncrement(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleIncrement(-1)}>-</button>
    </div>
  );
};

export default Counter;
