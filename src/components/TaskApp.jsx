import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks"
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask"
import Counter from "./Counter/Counter";

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* <div className="taskApp"> */}
      <TaskHeader/>
      <AddTask/>
      <Tasks/>
      {/* </div> */}

      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
