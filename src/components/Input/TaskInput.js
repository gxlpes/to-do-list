import React, { useState } from "react";
import { StyledForm } from "./StylesTaskInput";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
  };

  const taskInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <div>
        <label>Task name:</label>
        <input type="text" onChange={taskInputHandler} />
      </div>
      <button type="submit">Add</button>
    </StyledForm>
  );
};

export default TaskInput;
