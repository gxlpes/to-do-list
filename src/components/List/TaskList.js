import { useState } from "react";
import TaskItem from "./components/item/TaskItem";

const TaskInput = (props) => {
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
