import React, { useState } from "react";
import { nanoid } from "nanoid";

//Create a new task and submit the form
function Form(props) {
    const {tasks, setTasks}=props;
    const [name, setName] = useState('');
    function addTask(name) {
      const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
      setTasks([...tasks, newTask]);
    }
    // handleChange updates name state
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        // props.addTask(name); // send the task back to the App component
        props.addTask(name);
        setName(""); //clear the input after submitting forms 
    }
    return (
      // when a form is submitted
      <form onSubmit={handleSubmit}> 
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg"> 
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form >
    );
  }
  
  export default Form;