import { StyledLi, DeleteButton } from "./StylesTaskItem";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <StyledLi>
      {props.children}
      <DeleteButton onClick={deleteHandler}>✕</DeleteButton>
    </StyledLi>
  );
};

export default TaskItem;
