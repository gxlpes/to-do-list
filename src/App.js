import React, { useState } from "react";
import { SectionForm } from "./AppStyles";

const App = () => {
  const [tasks, setTasks] = useState(" ");

  const addTaskHandler = (enteredText) => {
    setTask((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  return (
    <div>
      <SectionForm id="form">
        <TaskInput onAdd={addTaskHandler} />
      </SectionForm>
      <section id="taks">{content}</section>
    </div>
  );
};

export default App;
