import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import Task from "../Task/Task";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [query, setQuery] = useState("")
  const [tasks, setTask] = useState([])

const handleChange = (e) => {

  const {value} = e.target;
  setQuery(value)

}

  const handleAdd = () => {
      const payload = {
        title:query,
        status:false
      }

      let newTask = [...tasks, payload]
      setTask(newTask)

      console.log(tasks)

  }


  return (
    <div className={styles.todoForm}>
      <div className={styles.addTask}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." className={styles.input} value={query} onChange={handleChange}/>
      <button data-cy="add-task-button" className={styles.addbtn} onClick={handleAdd}>+</button>
          <div>
           {tasks.map((item) =>{
           return <Task {...item}/>
           })}
      
       </div>
      </div>
    </div>


  );
};

export default AddTask;
