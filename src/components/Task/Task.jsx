import React from "react";
import styles from "./task.module.css";
import AddTask from "../AddTask/AddTask";
import Counter from "../Counter/Counter";
import { useState } from "react";


const Task = ({title}) => {
  // NOTE: do not delete `data-cy` key value pair



   

  return (
    <div>
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" / >
      <div data-cy="task-text">
        <h3>{`${title}`}</h3>
      </div>
      {/* Counter here */}
      <button data-cy="task-remove-button"></button>
    </li>
  </div>
  );
};

export default Task;
