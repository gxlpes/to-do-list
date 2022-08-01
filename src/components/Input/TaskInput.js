import React, { useState } from "react";
import { StyledForm, FormControl } from "./StylesTaskInput";

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
      <FormControl invalidProp={!isValid}>
        <label>Task name:</label>
        <input type="text" onChange={taskInputHandler} />
      </FormControl>
      <button type="submit">Add</button>
    </StyledForm>
  );
};

export default TaskInput;
