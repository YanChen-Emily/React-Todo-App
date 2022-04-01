import React, { useState } from "react";
// import Todo from "./Todo";
// import FilterButton from "./FilterButton";
// import { routes }  from "./routes";
import { nanoid } from "nanoid";

export const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);

export function addTask(tasks, setTasks, name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

export function toggleTaskCompleted(tasks, setTasks, id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
export function deleteTask(tasks, setTasks,id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  
export function editTask(tasks, setTasks, id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
} 

export const Home = () => {
  return <div>You are in Home page</div>
}

