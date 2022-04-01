import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { FILTER_MAP, FILTER_NAMES, addTask, toggleTaskCompleted, deleteTask, editTask } from "./components/Main";
import { Detail } from './components/pages/Detail';
import { Home } from './components/pages/Home';
import { nanoid } from "nanoid";
import { routes } from "./components/routes";
import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  const taskList = tasks.filter(FILTER_MAP[filter])
  .map(task => (
  <Todo
   id={task.id}
   name={task.name}
   completed={task.completed}
   key={task.id}
   toggleTaskCompleted={toggleTaskCompleted}
   deleteTask={deleteTask}
   editTask={editTask}
  />
  ));
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
    ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  
  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading">
        {headingText} 
      </h2>
      <div className="main">
      <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail" element={<Detail />}/>
      </Routes>
     </div>
    </div>
  );
}
export default App;

