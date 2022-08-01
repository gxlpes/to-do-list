import { StyledLi } from "./StylesTaskItem";

const TaskItem = (props) => {
  return <StyledLi>{props.children}</StyledLi>;
};

export default TaskItem;
