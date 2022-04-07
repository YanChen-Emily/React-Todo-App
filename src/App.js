import React, { useState } from "react";
import Form from "./components/Form";
import FilterList from "./components/FilterList";
import { TaskList}  from "./components/TaskList";
import { nanoid } from "nanoid";
import HeadingText from "./components/HeadingText";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  
  function addTask(name) {
      const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
      setTasks([...tasks, newTask]);
    }
  
  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form 
      setTasks = {setTasks}
      addTask={addTask} /> 
      <div className="filters btn-group stack-exception">
      <FilterList tasks={tasks} setFilter={setFilter}  filter={filter}/>
      </div>
      <h2 id="list-heading">
         <HeadingText tasks={tasks} setTasks={setTasks} filter={filter}/>
      </h2>
      <div className="main">
      <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
      >
        <TaskList tasks={tasks} setTasks={setTasks} filter={filter}/>
      </ul>
     </div>
    </div>
  );
}
export default App;

