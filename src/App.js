import { useState } from "react";
import { SectionForm } from "./AppStyles";
import TaskInput from "./components/Input/TaskInput";
import TaskList from "./components/List/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addTaskHandler = (enteredText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  let content = <p>No tasks found in your list. Maybe add a new one?</p>;

  if (tasks.length > 0) {
    // check if input is not blank
    content = <TaskList items={tasks} />;
  }

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
