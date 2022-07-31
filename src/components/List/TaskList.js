import { useState } from "react";
import TaskItem from "../Item/TaskItem";

const TaskList = (props) => {
  return (
    <ul>
      {props.items.map((task) => (
        <TaskItem key={task.id} id={task.id}>
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
