import TaskItem from "../Item/TaskItem";
import { StyledUl } from "./StylesTaskList";

const TaskList = (props) => {
  return (
    <StyledUl>
      {props.items.map((task) => (
        <TaskItem key={task.id} id={task.id} onDelete={props.onDeleteItem}>
          {task.text}
        </TaskItem>
      ))}
    </StyledUl>
  );
};

export default TaskList;
